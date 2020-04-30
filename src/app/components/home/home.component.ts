import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  errorMessage: string;

  constructor(private service: SpotifyService) { 
    this.loading = true;
    service.getNewReleases()
      .subscribe((data: any) => {
        this.newReleases = data;
        this.loading = false;
    }, (error: any) => {
      this.errorMessage = error.error.error.message;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}

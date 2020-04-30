import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  foundArtists: any[] = [];
  loading: boolean;
  errorMessage: string;

  constructor(private service: SpotifyService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.loading = true;
    if (!term) {
      this.loading = false;
      this.foundArtists = [];
      this.errorMessage = '';
      return;
    }
    this.service.searchArtists(term)
      .subscribe((data: any) => {
        this.foundArtists = data;
        this.loading = false;
      }, (error: any) => {
        this.errorMessage = error.error.error.message;
        console.log(error)
        this.loading = false;
      });
  }
}

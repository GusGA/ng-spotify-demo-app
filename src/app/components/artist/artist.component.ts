import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private service: SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params.id);
      this.getArtistTopTracks(params.id);
    });
  }

  ngOnInit(): void {
  }

  getArtist(id: string) {
    this.service.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
        this.loading = false;
      });
  }

  getArtistTopTracks(id: string) {
    this.service.getArtistTopTrack(id)
      .subscribe(tracks => {
        this.topTracks = tracks;
      });
  }
}
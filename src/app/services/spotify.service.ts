import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string;
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `${this.apiUrl}/${query}`;
    const headers: HttpHeaders = new HttpHeaders(
      {Authorization: `Bearer ${this.token}`}
    );

    return this.http.get(url, {headers});

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map( (data: any) =>  data.albums.items ));
  }

  searchArtists(term: string){
    return this.getQuery(`search?q=${term}&type=artist&limit=20`)
                .pipe(map( (data: any) => data.artists.items ));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getArtistTopTrack(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
               .pipe(map( (data: any) => data.tracks ));
  }

  fetchSpotifyToken() {
    return new Promise((resolve) => {
      this.http.get('https://damp-dawn-83598.herokuapp.com')
          .subscribe((data: string) => {
            this.token = data;
            resolve(true);
          });
    });
  }
}

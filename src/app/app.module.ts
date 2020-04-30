import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ErrorComponent } from './components/shared/error/error.component';

// Import routes
import { ROUTES } from './app.routes';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LaodingComponent } from './components/shared/laoding/laoding.component';
import { DurationPipe } from './pipes/duration.pipe';
import { TrackPreviewPipe } from './pipes/track-preview.pipe';

// services & providers
import { SpotifyService } from './services/spotify.service';
export function spotifyTokenProviderFactory(provider: SpotifyService) {
  return () => provider.fetchSpotifyToken();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LaodingComponent,
    DurationPipe,
    TrackPreviewPipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    SpotifyService,
    { provide: APP_INITIALIZER, useFactory: spotifyTokenProviderFactory, deps: [SpotifyService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

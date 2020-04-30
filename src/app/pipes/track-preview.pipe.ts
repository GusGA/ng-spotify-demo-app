import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trackPreview'
})
export class TrackPreviewPipe implements PipeTransform {
  constructor( private domSanitizer: DomSanitizer ){ }
  transform(id: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/track/${id}`);
    }
  }

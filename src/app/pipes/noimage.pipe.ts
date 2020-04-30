import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[], big: boolean = true): string {
    const index = big ? 0 : 2;
    if (images.length > 0) {
      return images[index].url;
    }
    return '/assets/img/original.png';
  }

}

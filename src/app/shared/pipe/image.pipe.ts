import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  standalone: true
})
export class ImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let imageUrl='https://image.tmdb.org/t/p/w500'
    return `${imageUrl}${value}`;
  }

}

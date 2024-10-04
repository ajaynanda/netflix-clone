import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime',
  standalone: true
})
export class RuntimePipe implements PipeTransform {

  transform(value: any) {
    if (value<=0)  '0 min'
    let hours = Math.floor(value/60)
    let minutes = value%60
    return `${hours}hr ${minutes}min`
  }
}

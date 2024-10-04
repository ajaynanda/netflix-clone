import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year',
  standalone: true
})
export class YearPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
  return new Date(value).getFullYear().toString()
  }

}

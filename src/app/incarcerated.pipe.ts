import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incarcerated'
})
export class IncarceratedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

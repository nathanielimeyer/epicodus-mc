import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'incarcerated',
  pure: false
})

export class IncarceratedPipe implements PipeTransform {
  transform(input: Member[], incarceratedStatus) {
    var output: Member[] = [];
    if (incarceratedStatus = true) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].incarcerated === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (incarceratedStatus = false) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].incarcerated === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'reverseArray'
})
export class ReverseArrayPipe implements PipeTransform {

  transform(array) {
    return array.slice().reverse();
  }

}

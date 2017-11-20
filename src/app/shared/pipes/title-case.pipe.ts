import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({name: 'titleCase'})

export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.split(/\s/g).map((word) => {
      if (!word || word === 'EAD') return word;
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ')
  }

}

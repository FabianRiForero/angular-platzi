import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'vocals'
})
export class VocalsPipe implements PipeTransform {

  transform(value: string): string {
    const options: any = { a: '@', e: '3', i: '1', o: '0', u: '|_|' };
    for (const option in options) {
      const regex = new RegExp('\(' + option + ')', 'gi');
      value = value.replace(regex, options[option] as string);
    }
    return value;
  }

}

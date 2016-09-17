import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divBy10'
})
export class DivBy10Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let num = parseInt(value) / 10;
    value = num + ''; // make sure it's a string
    return value;
  }

}

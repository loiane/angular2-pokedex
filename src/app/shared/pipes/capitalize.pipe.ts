import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.substr(0,1).toUpperCase() +
      value.substr(1).toLowerCase();
    return value;
  }

}

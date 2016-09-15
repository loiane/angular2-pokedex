import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNumber'
})
export class PokemonNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let max = 3;
    var s = value + '';
    while (s.length < max) s = '0' + s;
    return s;
  }

}

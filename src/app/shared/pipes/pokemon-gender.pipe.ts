import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonGender'
})
export class PokemonGenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let femalePerc = parseInt(value) / 0.08;
    let malePerc = 100 - femalePerc;
    return malePerc + '% male, ' + femalePerc + '% female';
  }

}

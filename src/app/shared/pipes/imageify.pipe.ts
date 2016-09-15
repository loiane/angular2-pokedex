import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageify'
})
export class ImageifyPipe implements PipeTransform {

  private imgBaseUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/';

  transform(value: any, args?: any): any {
    return this.imgBaseUrl + value + '.png'
  }

}

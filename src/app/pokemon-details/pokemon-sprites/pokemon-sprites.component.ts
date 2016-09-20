import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-sprites',
  templateUrl: './pokemon-sprites.component.html',
  styleUrls: ['./pokemon-sprites.component.scss']
})
export class PokemonSpritesComponent {

  @Input() pokemon: any;

}

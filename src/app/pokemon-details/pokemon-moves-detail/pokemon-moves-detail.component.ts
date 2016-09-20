import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-moves-detail',
  templateUrl: './pokemon-moves-detail.component.html',
  styleUrls: ['./pokemon-moves-detail.component.scss']
})
export class PokemonMovesDetailComponent {

  @Input() pokemon: any;
  @Input() list: any[];
  @Input() levelUp: boolean = false;

}

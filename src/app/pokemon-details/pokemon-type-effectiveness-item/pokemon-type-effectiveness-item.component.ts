import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type-effectiveness-item',
  templateUrl: './pokemon-type-effectiveness-item.component.html',
  styleUrls: ['./pokemon-type-effectiveness-item.component.scss']
})
export class PokemonTypeEffectivenessItemComponent {

  @Input() text: string;
  @Input() list: any[];

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-stats-item',
  templateUrl: './pokemon-stats-item.component.html',
  styleUrls: ['./pokemon-stats-item.component.scss']
})
export class PokemonStatsItemComponent {

  @Input() text: string;
  @Input() value: number;
  @Input() classValue: string;

}

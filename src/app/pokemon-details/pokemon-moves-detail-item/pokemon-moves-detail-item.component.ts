import { Component, OnInit, Input } from '@angular/core';

import { PokedexService } from '../../pokedex/pokedex.service';
import { UtilitiesService } from '../../shared/utilities.service';

@Component({
  selector: 'app-pokemon-moves-detail-item',
  templateUrl: './pokemon-moves-detail-item.component.html',
  styleUrls: ['./pokemon-moves-detail-item.component.scss']
})
export class PokemonMovesDetailItemComponent implements OnInit {

  @Input() move: any;
  @Input() levelUp: boolean = false;
  moveDetails: any;

  constructor(
    private pokedexService: PokedexService,
    private util: UtilitiesService
  ) {}

  ngOnInit(){
    let id: number = this.util.retrieveIdFromUrl(this.move.move.url, 'move');
    this.pokedexService.getMove(id)
      .subscribe(moveDetails => this.moveDetails = moveDetails);
  }

  getName(){
    if (this.moveDetails){
      let listNames = this.moveDetails.names;
      for (let i=0; i<listNames.length; i++){
        if (listNames[i].language.name === 'en'){
          return listNames[i].name;
        }
      }
    }
    return undefined;
  }

  getPower(){
    if (this.moveDetails){
      return this.retrieveValue(this.moveDetails.power);
    }
    return '-'
  }

  getAccuracy(){
    if (this.moveDetails){
      return this.retrieveValue(this.moveDetails.accuracy);
    }
    return '-'
  }

  private retrieveValue(value){
    return value === null ? '-' : value;
  }

}

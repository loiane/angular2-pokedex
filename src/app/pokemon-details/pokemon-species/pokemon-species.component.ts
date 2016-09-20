import { Component, OnInit, Input } from '@angular/core';

import { PokedexService } from '../../pokedex/pokedex.service';
import { UtilitiesService } from '../../shared/utilities.service';

@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.scss']
})
export class PokemonSpeciesComponent implements OnInit {

  @Input() pokemon: any;

  private speciesDetails: any;
  private speciesName: string;
  private description: string;
  private abilities: any;

  constructor(
    private pokedexService: PokedexService,
    private util: UtilitiesService
  ) {}

  ngOnInit() {
    let speciesId: number = this.util.retrieveIdFromUrl(this.pokemon.species.url, 'pokemon-species');
    this.pokedexService.getSpecies(speciesId)
      .subscribe(data => this.initSpeciesData(data));
  }

  initSpeciesData(data){
    this.speciesDetails = data;
    this.speciesName = this.util.getTranslatedName(this.speciesDetails.genera);
    this.description = this.util.getTranslatedName(this.speciesDetails.flavor_text_entries);
    this.abilities = this.getPokemonAbilities();
  }

  getPokemonAbilities(){
    let list: any[] = [];
    let infoList = this.pokemon.abilities;
    if (this.pokemon && infoList) {
      let item: any;
      for (let i=0; i<infoList.length; i++){
        item = infoList[i];
        if (item){
          list.splice((item.slot-1), 0, item);
        }
      }
    }
    return list;
  }

}

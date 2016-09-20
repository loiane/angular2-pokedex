import { Component, OnInit, Input } from '@angular/core';

import { PokedexService } from '../../pokedex/pokedex.service';
import { UtilitiesService } from '../../shared/utilities.service';

@Component({
  selector: 'app-pokemon-type-effectiveness',
  templateUrl: './pokemon-type-effectiveness.component.html',
  styleUrls: ['./pokemon-type-effectiveness.component.scss']
})
export class PokemonTypeEffectivenessComponent implements OnInit {

  @Input() pokemon: any;

  private typesDetails: any[] = [];

  private doubleDamageFrom: any[] = [];
  private doubleDamageTo: any[] = [];
  private halfDamageFrom: any[] = [];
  private halfDamageTo: any[] = [];
  private noDamageFrom: any[] = [];
  private noDamageTo: any[] = [];

  constructor(
    private pokedexService: PokedexService,
    private util: UtilitiesService
  ) {}

  ngOnInit(){
    let observableBatch = [];

    for (let i=0; i<this.pokemon.types.length; i++){
      let id = this.util.retrieveIdFromUrl(this.pokemon.types[i].type.url, 'type');
      observableBatch.push(this.pokedexService.getType(id));
    }

    this.pokedexService.doMultipleRequests(observableBatch)
      .subscribe((t: any[]) => {
        t.forEach((result) => this.typesDetails.push(result));
        this.retrieveTypeEffectiveness();
      })
  }

  retrieveTypeEffectiveness() {
    let damageRelations: any;
    for (let i=0; i<this.typesDetails.length; i++){
      damageRelations = this.typesDetails[i].damage_relations;

      this.retrieveInfo(damageRelations.no_damage_to, this.noDamageTo);
      this.retrieveInfo(damageRelations.half_damage_to, this.halfDamageTo);
      this.retrieveInfo(damageRelations.double_damage_to, this.doubleDamageTo);
      this.retrieveInfo(damageRelations.no_damage_from, this.noDamageFrom);
      this.retrieveInfo(damageRelations.half_damage_from, this.halfDamageFrom);
      this.retrieveInfo(damageRelations.double_damage_from, this.doubleDamageFrom);
    }
  }

  retrieveInfo(listToIterate, listToAdd){
    for (let i=0; i<listToIterate.length; i++){
      let item = listToIterate[i];
      if (!this.util.containsByName(listToAdd, item)) {
        listToAdd.push(item);
      }
    }
  }
}

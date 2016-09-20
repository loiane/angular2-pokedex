import { Component, OnInit, Input } from '@angular/core';

import { PokedexService } from '../../pokedex/pokedex.service';
import { UtilitiesService } from '../../shared/utilities.service';

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.scss']
})
export class PokemonEvolutionComponent implements OnInit {

  @Input() pokemon: any;
  evolutionDetails: any;
  evolutions: any[] = [];

  constructor(
    private pokedexService: PokedexService,
    private util: UtilitiesService
  ) {}

  ngOnInit(){
    let speciesId: number = this.util.retrieveIdFromUrl(this.pokemon.species.url, 'pokemon-species');
    this.pokedexService.getSpecies(speciesId)
      .subscribe(speciesDetails => this.loadEvolutionDetails(speciesDetails));
  }

  loadEvolutionDetails(speciesDetails){
    let id: number = this.util.retrieveIdFromUrl(speciesDetails.evolution_chain.url, 'evolution-chain');
    this.pokedexService.getEvolution(id)
      .subscribe(data => this.loadEvolutions(data));
  }

  loadEvolutions(data){
    this.evolutionDetails = data;
    this.evolutions = [];
    let item = this.evolutionDetails.chain.evolves_to[0];
    while (item){
      let ev: any = {};
      ev.name = item.species.name;
      ev.id = this.util.retrieveIdFromUrl(item.species.url, 'pokemon-species');
      ev.level = item.evolution_details[0].min_level;
      this.evolutions.push(ev);
      item = item.evolves_to[0];
    }
  }

}

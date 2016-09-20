import { Component, OnInit } from '@angular/core';

import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: 'pokedex.component.html',
  styleUrls: ['pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemonList: any[] = [];

  private searchQuery: string = '';

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(){
    this.pokedexService.getAllPokemon()
      .subscribe(pokemonList => {
        this.pokemonList = pokemonList;
        this.pokedexService.initData();
      });
  }

  getPokemons(){
    var q = this.searchQuery;
    if (q.trim() == '') {
      return this.pokemonList;
    }
    return this.pokemonList.filter((v) => {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  onClearSearch(){
    this.searchQuery = '';
  }

}

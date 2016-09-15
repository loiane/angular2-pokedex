import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PokedexService {

  private pokemons: any[];

  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'assets/data/v2/';
  }

  getAllPokemon() {
    if (this.pokemons) {
      return Observable.of(this.pokemons);
    } else {
      return this.http.get(this.baseUrl  + 'pokemon.json')
        .map((res: Response) => res.json().results)
        .do((data) => { this.pokemons = data; })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
  }

  getPokemon(id: number){
    return this.getAllPokemon()
      .map((res: Response) => res[id-1]);
  }

  sortPokemonTypes(pokemon){
      let types: any[] = [];
      if (pokemon && pokemon.types) {
        let type: any;
        for (let i=0; i<pokemon.types.length; i++){
          type = pokemon.types[i];
          if (type){
            types.splice((type.slot-1), 0, type);
          }
        }
      }
      if (types.length > 0){
        pokemon.types = types;
      }
      return pokemon;
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { PokedexService } from '../pokedex/pokedex.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {

  pokemon: any;
  private sub: Subscription;

  private imgBaseUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokedexService: PokedexService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.pokedexService.getPokemon(id)
        .subscribe(data => {
          this.pokemon = this.pokedexService.sortPokemonTypes(data);
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.scss']
})
export class PokedexItemComponent implements OnInit {

  @Input() pokemon: any;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokemon = this.pokedexService.sortPokemonTypes(this.pokemon);
  }

  /*goToPokemonDetail(){
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }*/

}

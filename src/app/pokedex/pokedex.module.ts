import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PokemonDetailsModule } from '../pokemon-details/pokemon-details.module';

import { pokedexRouting } from './pokedex.routing';

import { PokedexComponent } from './pokedex.component';
import { PokedexItemComponent } from './pokedex-item/pokedex-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    pokedexRouting,
    PokemonDetailsModule
  ],
  declarations: [
    PokedexComponent,
    PokedexItemComponent
  ],
  exports: [ PokedexComponent ]
})
export class PokedexModule { }

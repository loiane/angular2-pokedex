import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { SharedModule } from '../shared/shared.module';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonImageComponent } from './pokemon-image/pokemon-image.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    SharedModule
  ],
  declarations: [
    PokemonDetailsComponent,
    PokemonImageComponent,
    PokemonHeaderComponent,
    PokemonSpeciesComponent
  ],
  exports: [
    PokemonDetailsComponent,
    PokemonImageComponent,
    PokemonHeaderComponent
  ]
})
export class PokemonDetailsModule { }

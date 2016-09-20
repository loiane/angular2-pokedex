import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { SharedModule } from '../shared/shared.module';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonImageComponent } from './pokemon-image/pokemon-image.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonSpeciesComponent } from './pokemon-species/pokemon-species.component';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonStatsItemComponent } from './pokemon-stats-item/pokemon-stats-item.component';
import { PokemonEvolutionComponent } from './pokemon-evolution/pokemon-evolution.component';
import { PokemonSpritesComponent } from './pokemon-sprites/pokemon-sprites.component';
import { PokemonTypeEffectivenessComponent } from './pokemon-type-effectiveness/pokemon-type-effectiveness.component';
import { PokemonTypeEffectivenessItemComponent } from './pokemon-type-effectiveness-item/pokemon-type-effectiveness-item.component';
import { PokemonMovesComponent } from './pokemon-moves/pokemon-moves.component';
import { PokemonMovesDetailComponent } from './pokemon-moves-detail/pokemon-moves-detail.component';
import { PokemonMovesDetailItemComponent } from './pokemon-moves-detail-item/pokemon-moves-detail-item.component';

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
    PokemonSpeciesComponent,
    PokemonStatsComponent,
    PokemonStatsItemComponent,
    PokemonEvolutionComponent,
    PokemonSpritesComponent,
    PokemonTypeEffectivenessComponent,
    PokemonTypeEffectivenessItemComponent,
    PokemonMovesComponent,
    PokemonMovesDetailComponent,
    PokemonMovesDetailItemComponent
  ],
  exports: [
    PokemonDetailsComponent,
    PokemonImageComponent,
    PokemonHeaderComponent
  ]
})
export class PokemonDetailsModule { }

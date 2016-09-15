import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent }    from './pokedex.component';
import { PokemonDetailsComponent }  from '../pokemon-details/pokemon-details.component';

const pokedexRoutes: Routes = [
  { path: 'pokedex',  component: PokedexComponent },
  { path: 'pokemon/:id', component: PokemonDetailsComponent }
];

export const pokedexRouting: ModuleWithProviders = RouterModule.forChild(pokedexRoutes);

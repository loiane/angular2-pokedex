import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PokemonNumberPipe } from './pipes/pokemon-number.pipe';
import { ImageifyPipe } from './pipes/imageify.pipe';
import { UtilitiesService } from './utilities.service';
import { DivBy10Pipe } from './pipes/div-by-10.pipe';
import { PokemonGenderPipe } from './pipes/pokemon-gender.pipe';

export const sharedPipes = [
  CapitalizePipe,
  PokemonNumberPipe,
  ImageifyPipe,
  DivBy10Pipe,
  PokemonGenderPipe
];

export const sharedProviders = [
  UtilitiesService
];

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ sharedPipes ],
  exports: [ sharedPipes ]
})
export class SharedModule { }

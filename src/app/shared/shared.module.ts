import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PokemonNumberPipe } from './pipes/pokemon-number.pipe';
import { ImageifyPipe } from './pipes/imageify.pipe';

const pipes = [
  CapitalizePipe,
  PokemonNumberPipe,
  ImageifyPipe
];

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    pipes
  ],
  exports: [
    pipes
  ]
})
export class SharedModule { }

/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PokemonComponent } from './pokemon.component';

describe('Component: Pokemon', () => {
  it('should create an instance', () => {
    let component = new PokemonComponent();
    expect(component).toBeTruthy();
  });
});

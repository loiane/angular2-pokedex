/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PokedexComponent } from './pokedex.component';

describe('Component: Pokedex', () => {
  it('should create an instance', () => {
    let component = new PokedexComponent();
    expect(component).toBeTruthy();
  });
});

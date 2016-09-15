/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokedexService } from './pokedex.service';

describe('Service: Pokedex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokedexService]
    });
  });

  it('should ...', inject([PokedexService], (service: PokedexService) => {
    expect(service).toBeTruthy();
  }));
});

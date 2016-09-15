import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.scss']
})
export class PokemonImageComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit() {
  }

}

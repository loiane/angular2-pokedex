import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit() {
  }

}

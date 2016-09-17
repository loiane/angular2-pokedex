import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

//import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokedexService } from './pokedex/pokedex.service';
import { PokedexModule } from './pokedex/pokedex.module';
import { SharedModule, sharedProviders, sharedPipes} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SharedModule,
    //MaterializeModule,
    PokedexModule
  ],
  providers: [
    PokedexService,
    sharedProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

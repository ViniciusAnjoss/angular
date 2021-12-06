import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import {IMaskModule} from 'angular-imask';
import { DetalhePokemonsComponent } from './pokemons/detalhes-pokemons/detalhes-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PokemonsModule,
    IMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
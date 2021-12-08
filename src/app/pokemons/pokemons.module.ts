import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';
import { DetalhePokemonsComponent } from './detalhes-pokemons/detalhes-pokemons.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListarPokemonsComponent,
    DetalhePokemonsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ListarPokemonsComponent
  ]
})
export class PokemonsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPokemonsComponent } from './listar-pokemons/listar-pokemons.component';
import { DetalhePokemonsComponent } from './detalhes-pokemons/detalhes-pokemons.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListarPokemonsComponent,
    DetalhePokemonsComponent
  ],
  imports: [
    CommonModule,
    //HttpClientModule
    SharedModule
  ],
  exports:[
    ListarPokemonsComponent
  ]
})
export class PokemonsModule { }
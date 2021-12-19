import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
//import { ListarProfessoresComponent } from './professores/listar-professores/listar-professores.component';
import { ListarPokemonsComponent } from './pokemons/listar-pokemons/listar-pokemons.component';
const routes: Routes = [
  { path:"primeiro-componente", component: MeuPrimeiroComponent},
  //{ path : 'professores' , component: ListarProfessoresComponent},
  { path : 'pokemons' , component: ListarPokemonsComponent},
  { path : 'alunos' , component: AlunosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
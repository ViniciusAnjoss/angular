import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { ProfessorGuardService } from './professores/professor-guard.service';
//import { ListarPokemonsComponent } from './pokemons/listar-pokemons/listar-pokemons.component';
// import { ListarProfessoresComponent } from './professores/listar-professores/listar-professores.component';

const routes: Routes = [
  { path:'primeiro-componente', component: MeuPrimeiroComponent },
  //{ path : 'professores' , component: ListarProfessoresComponent},
//  { path: 'pokemons', component: ListarPokemonsComponent}
  { path : 'alunos', loadChildren: ()=> import('./alunos/alunos.module').then(m => m.AlunosModule)  },
  { path : 'usuarios', loadChildren: ()=> import('./alunos/alunos.module').then(m => m.AlunosModule)  },
  { path : 'formularios', loadChildren: ()=> import('./formularios/formularios.module').then(m => m.FormulariosModule)  },
  { path : 'pokemons', loadChildren: ()=> import('./pokemons/pokemons.module').then(m => m.PokemonsModule)  },
  { path : 'professores',
    loadChildren: ()=> import('./professores/professores.module').then(m => m.ProfessoresModule) ,
      canActivate:[ProfessorGuardService]
  },
  { path : 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)  }
];
// /alunos
// /alunos/1
// /alunos/new

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

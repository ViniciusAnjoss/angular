import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

const routes: Routes = [
   {path: 'alunos', component: AlunosComponent},
   {path : 'alunos/new', component : AlunosFormComponent},
   {path : 'alunos/:id', component : AlunosFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { SharedModule } from '../shared/shared.module';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

@NgModule({
  declarations: [AlunosComponent, AlunosFormComponent],
  imports: [CommonModule, SharedModule, AlunosRoutingModule],
  exports: [AlunosComponent],
})
export class AlunosModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { DetalheUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { CpfPipe } from '../shared/pipes/cpf.pipe';
//import { GrifaTextoDirective } from '../shared/diretivas/grifa-texto.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListarUsuariosComponent,
    DetalheUsuarioComponent,

    //GrifaTextoDirective,
  ],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    ListarUsuariosComponent,
     CpfPipe, 

    ],
})
export class UsuariosModule {}
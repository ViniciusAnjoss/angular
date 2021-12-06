import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { DetalheUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';



@NgModule({
  declarations: [
    ListarUsuariosComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListarUsuariosComponent
    
  ]
})
export class UsuariosModule { }
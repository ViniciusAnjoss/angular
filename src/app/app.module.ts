import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import {IMaskModule} from 'angular-imask';
import { ProfessoresModule } from './professores/professores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FormulariosModule } from './formularios/formularios.module';
import { AlunosModule } from './alunos/alunos.module';


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
    UsuariosModule,
    IMaskModule,
    ProfessoresModule,
    FormulariosModule,
    NgxPaginationModule,
    AlunosModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
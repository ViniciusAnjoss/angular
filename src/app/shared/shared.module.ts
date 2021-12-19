import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrifaTextoDirective } from './diretivas/grifa-texto.directive';
import { CpfPipe } from './pipes/cpf.pipe';
import { DebugFormComponent } from './debug-form/debug-form.component';
import { FieldErrorComponent } from './field-error/field-error.component';

@NgModule({
  declarations: [
    GrifaTextoDirective, 
    CpfPipe,
    DebugFormComponent,
    FieldErrorComponent
  ],
  imports: 
  [CommonModule, 
    HttpClientModule,
     FormsModule,
     ReactiveFormsModule
    ],
  exports: [
    HttpClientModule, 
    FormsModule, 
    GrifaTextoDirective, 
    CpfPipe,
    ReactiveFormsModule,
    DebugFormComponent,
    FieldErrorComponent
  ],
})
export class SharedModule {}
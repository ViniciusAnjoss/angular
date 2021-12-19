import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeuFormComponent } from './meu-form/meu-form.component';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor(private http: HttpClient) { }

  save(body: any){
  return this.http.post("http://cursos.grandeporte.com.br:8080/professores",body)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  constructor(private httpclient:HttpClient) { }


  getAll(){
    return this.httpclient.get("http://cursos.grandeporte.com.br:8080/professores")
  }

}

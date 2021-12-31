import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessorGuardService implements CanActivate {
  // assinatura : nome do método + parâmetros
  constructor(private authservice: AuthService) { }

  canActivate() : boolean{
      // let isAutenticado = localStorage.getItem('autenticado');

      // return (isAutenticado === 'true'? true:false);

      return this.authservice.isAutenticado();
  }

}

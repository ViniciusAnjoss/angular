import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios = [
    { nome: "João", sobrenome: "Silva", idade : 10 },
    { nome: "Arnaldo", sobrenome: "Lima", idade : 30 },
    { nome: "José", sobrenome: "Pereira", idade : 50 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

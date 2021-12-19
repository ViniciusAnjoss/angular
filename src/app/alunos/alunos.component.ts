import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos :any ;
  constructor(private alunosservice:AlunosService) { }

  ngOnInit(): void {
    this.retornarTodos();
  }

  onApagarClick(alunos: any){
    console.log(alunos)
    this.alunosservice.deletar(alunos.id)
      .subscribe(
        ()=> {
          //this.retornarTodos();
          let index = this.alunos.findIndex( (obj:any) =>  alunos.id == obj.id );
          this.alunos.splice(index,1);
          alert(`aluno ${alunos.id} deletado com sucesso` );
        }
      );
  }

  retornarTodos(){
    this.alunosservice.getAll()
    .subscribe(
        (dados)=>{
          this.alunos = dados;
          //console.log(dados)
        }
      );
  }
  

}


import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-listar-pokemons',
  templateUrl: './listar-pokemons.component.html',
  styleUrls: ['./listar-pokemons.component.css']
})
export class ListarPokemonsComponent implements OnInit {

  pokemonSelecionadoPai : any = null;
  diaDeHoje = new Date();
  pokemons : any = null;

  constructor(private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.getAll()
    .subscribe(
      (response) => {
        this.pokemons = response
      }
    );
  }

  onSelecionarClick(results:any){
    this.pokemonSelecionadoPai = results;
  }

  receberIdFilho(variavel : any){
    alert("O ID do Filho é " + variavel)
  }

  letrasMaiusculas(texto: any){
    return texto.toUpperCase();
  }

}
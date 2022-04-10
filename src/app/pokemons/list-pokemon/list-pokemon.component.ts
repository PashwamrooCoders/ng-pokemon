import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import {Router} from '@angular/router'
import { PokemonsService } from './pokemons.service';


@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
  providers: [PokemonsService]
})
export class ListPokemonComponent implements OnInit {
  
  title = 'ng-pokemon-app';
  public pokemons!: Pokemon[];
  public titre: string = "Pokémons";
  

  ngOnInit(): void {
    
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
    //.subscribe(pokemons => this.pokemons= pokemons);
  }

  constructor(private router: Router, private pokemonService: PokemonsService){}

  /*
  onClick() {
    console.log("Clic !");
  }

  onKey(value: string) {
    this.value = 'Bonjour ' + value;
  }

  onEnter(valeur: string) { 
    this.valeur = valeur; } */

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliqué sur " + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}

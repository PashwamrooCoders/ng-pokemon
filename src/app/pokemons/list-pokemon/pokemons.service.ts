import { Injectable } from '@angular/core';
import { POKEMONS } from '../../mock-pokemon';
import { Pokemon } from '../../pokemon';

  
@Injectable()
export class PokemonsService {
  
    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
      return POKEMONS;
    }
      
    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): any {
      let pokemons = this.getPokemons();
      
      for(let index = 0; index < pokemons.length; index++) {

        if(id === pokemons[index].id) 

          return pokemons[index];
        
      }
    }
}
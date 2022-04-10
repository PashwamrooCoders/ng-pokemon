import { Injectable } from '@angular/core';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { threadId } from 'worker_threads';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  private pokemonsUrl = 'api/pokemons';

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // Retourne tous les pokémons avec l'appel de l'API
   getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
        tap(_ => this.log(`fetched pokemons`)),
        catchError(this.handleError(`getPokemons`, []))
    );
   }


   // retourne le pokemon avec l'identifiant passé en parametre en utilisant l'API
   getPokemon(id: number): Observable<Pokemon> {
     const url = `${this.pokemonsUrl}/${id}`;       // syntaxe ES6

     return this.http.get<Pokemon>(url).pipe(
       tap(_ => this.log(`fetched pokemon id=${id}`)),
       catchError(this.handleError<Pokemon>('getPokemon , id=${id}'))
     );
   }

  // Retourne tous les pokémons sans l'appel de l'API
 /*  getPokemons(): Pokemon[] {
    return POKEMONS;
  } */
    
// Retourne le pokémon avec l'identifiant passé en paramètre

/* getPokemon(id: number): any {
  return this.getPokemons().find(p => p.id === id);
} */

/* getPokemon(id: number): Pokemon {
  let pokemons = this.getPokemons();
  let thePokemon! : Pokemon;
  for(let index = 0; index < pokemons.length; index++) {
    if(id === pokemons[index].id) {
      thePokemon = pokemons[index];
    }
  }
  return thePokemon;
}  */

  getPokemonTypes() : string[] {
    
    return ['Plante', 'Feu','Eau', 'Insecte','Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }

}

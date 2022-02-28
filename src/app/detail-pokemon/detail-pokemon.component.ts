import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import { PokemonsService } from '../list-pokemon/pokemons.service';
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {
  
    //pokemons!: Pokemon[] ; //liste de tous les pokemons de notre appli
    pokemon!: Pokemon ;  // le pokemon a afficher
  
    constructor(private route: ActivatedRoute,
        private router: Router,
        private pokemonsService:PokemonsService ) {}
  
    ngOnInit(): void {
        //this.pokemons = POKEMONS;
  
        let id = +this.route.snapshot.params['id'];
       /* for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        } */
        this.pokemon = this.pokemonsService.getPokemon(id);
    }
  
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
  


}
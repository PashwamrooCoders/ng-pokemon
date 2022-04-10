import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { PokemonsService } from '../list-pokemon/pokemons.service';
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {
  
    //pokemons!: Pokemon[] ; //liste de tous les pokemons de notre appli
    @Input()
    pokemon!: Pokemon ;  // le pokemon a afficher
    
  
    constructor(private route: ActivatedRoute,
        private router: Router,
        private pokemonsService:PokemonsService ) {}
  
    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.pokemon = this.pokemonsService.getPokemon(id);
    }
  
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

    goEdit(pokemon: Pokemon): void{
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

}
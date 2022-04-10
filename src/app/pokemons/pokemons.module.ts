import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';

import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
  
@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonFormComponent,
        EditPokemonComponent
        
    ],
    providers: [PokemonsService]
})
export class PokemonsModule { }
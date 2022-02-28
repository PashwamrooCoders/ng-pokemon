import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
  
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: []
})
export class PokemonsModule { }
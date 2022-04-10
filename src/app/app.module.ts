import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BorderCardDirective } from './border-card.directive';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonFormComponent } from './pokemons/pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component'



@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonComponent,
    PageNotFoundComponent,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

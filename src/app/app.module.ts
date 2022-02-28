import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BorderCardDirective } from './border-card.directive';
import { AppComponent } from './app.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

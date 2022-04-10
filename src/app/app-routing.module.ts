import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';
  
// routes
const appRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent} // mettre toujours la route d'erreur en dernier sinon toutes les routes vont pointer vers elle
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieupdateComponent } from './components/movieupdate/movieupdate.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'movie/:id', component: MovieupdateComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

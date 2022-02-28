import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MovieComponent } from './components/movie/movie.component';
import { MovieupdateComponent } from './components/movieupdate/movieupdate.component';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieupdateComponent,
    HomeComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

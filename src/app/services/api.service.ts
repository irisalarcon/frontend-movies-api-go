import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";


const apiBaseUrl = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apliClient: HttpClient) {
  }

  //todas las peliculas
  getAllMovies(): Observable<any>{
    return this.apliClient.get(apiBaseUrl+'/movie');
  }

  //leer pelicula por id
  readMovie(movieId: any): Observable<any>{
    return this.apliClient.get(`${apiBaseUrl}/movie/${movieId}`);
  }

   //crear pelicula
  createMovie(movie: any): Observable<any>{
    return this.apliClient.post(apiBaseUrl+"/movie", movie);
  }

  //actualizar pelicula
  updateMovie(movieId: any, updateData: any): Observable<any>{
    return this.apliClient.put(apiBaseUrl+'/movie', updateData);
  }

  //borrar pelicula
  removeMovie(movieId: any): Observable<any>{
    return this.apliClient.delete(`${apiBaseUrl}/movie/${movieId}`);
  }

}

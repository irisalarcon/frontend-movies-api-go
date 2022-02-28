import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";


const apiBaseUrl = "http://localhost:8080/back-test/rest"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apliClient: HttpClient) {
  }

  //todas las peliculas
  getAllMovies(): Observable<any>{
    return this.apliClient.get(apiBaseUrl+'/movies');
  }

  //pelicula por id
  readMovie(movieId: any): Observable<any>{
    return this.apliClient.get(`${apiBaseUrl}/movies/${movieId}`);
  }

  //crear pelicula
  createMovie(movie: any): Observable<any>{
    return this.apliClient.post(apiBaseUrl+"/movies", movie);
  }

  //actualizar pelicula
  updateMovie(movieId: any, updateData: any): Observable<any>{
    return this.apliClient.patch(`${apiBaseUrl}/movies/${movieId}`, updateData);
  }

  //borrar pelicula
  removeMovie(movieId: any): Observable<any>{
    return this.apliClient.delete(`${apiBaseUrl}/movies/${movieId}`);
  }

}

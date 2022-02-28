import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieRegistrationForm;
  movies: any;

  constructor( private formBuilder: FormBuilder,
               private apiService: ApiService) {
    this.movieRegistrationForm = this.formBuilder.group({
      title: '',
      year: '',
      duration: ''
    })
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){

    this.apiService.getAllMovies().subscribe(response => {
      this.movies = response;
      //console.log(JSON.stringify(response));
    }, error => {
      console.log(error);
    })
  }

  onSubmit(movieData: { title: any; year: any; duration: any; }){
    this.movieRegistrationForm.reset();
    const movie_register_data = {
      title: movieData.title,
      year: movieData.year,
      duration: movieData.duration
    };
    console.log("movie registration successfully", movieData);
    this.apiService.createMovie(movie_register_data).subscribe(response =>{
        console.log("movie creation successfull"+response.id);
        },
      error => {
        console.log("Error in movie registration")
      });

  }

}

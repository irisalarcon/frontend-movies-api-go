import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any;

  constructor(private apiService: ApiService) { }

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

}

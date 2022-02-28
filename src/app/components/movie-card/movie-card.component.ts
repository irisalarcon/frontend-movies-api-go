import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {


  @Input() title = '';
  @Input() year = '';
  @Input() watched = '';


  img:any[] = ['https://www.flickr.com/photos/sagehollow/51909259852/',
  'https://i.pinimg.com/736x/44/02/a4/4402a4812a686a4254181cd5e2d28078.jpg',
  'https://t2.uc.ltmcdn.com/images/7/3/7/img_como_conseguir_caratulas_para_peliculas_1737_600.jpg',
    'https://imagessl3.casadellibro.com/a/l/t7/93/9788423351893.jpg'
  ];


  constructor() { }

  ngOnInit(): void {

  }



}

import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-moviecomp',
  templateUrl: './moviecomp.component.html',
  styleUrls: ['./moviecomp.component.css']
})


export class MoviecompComponent implements OnInit {

  title = 'AngularMaster';
  movies: Movie[];
  displayedColumns: string[] = ['movieid', 'title', 'language'];
  dataSource;
  data;

  constructor(private service: MovieserviceService) {

  }
  ngOnInit() {
    this.service.getMovies().subscribe(data => { this.movies = data; });
  }

}

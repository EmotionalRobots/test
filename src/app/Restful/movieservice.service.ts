import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Movie } from './Models/movie';
import {  Observable} from 'rxjs';

const httpOptions = {headers: new HttpHeaders(
  {
    'Content-Type': 'application/json'
  }
)};

@Injectable({
  providedIn: 'root'
})

export class MovieserviceService {
  private movieurl = 'http://localhost:8080/RestfulDataFetch/rest/movies';

  constructor(private http: HttpClient) { }

  public getMovies() {
    return this.http.get<Movie[]>(this.movieurl);
  }

}

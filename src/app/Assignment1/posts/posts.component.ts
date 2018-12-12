import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  response: any;
  response_all: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
  //     this.response_all = response.json();
  //     console.log(this.response_all);
  //  });
  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
    this.response_all = response;
  });
}
}

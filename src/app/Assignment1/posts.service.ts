import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
// import { ConsoleReporter } from 'jasmine';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class PostsService implements OnInit {

  myId: number;
  response_all;
  filtered: any[] = [];

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
      this.response_all = response;
    });
    // this.filter();
  }

  filter() {
    this.filtered = [];
    console.log('from service - response_all: ' + this.response_all);
    for (const post of this.response_all) {
      if (this.myId === post.userId) {
        console.log(post);

        this.filtered.push((post));
      }
    }
  }
}

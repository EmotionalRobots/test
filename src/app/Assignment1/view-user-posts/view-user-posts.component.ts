import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-view-user-posts',
  templateUrl: './view-user-posts.component.html',
  styleUrls: ['./view-user-posts.component.css']
})
export class ViewUserPostsComponent implements OnInit {

  response_all;
  filtered: [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response) => {
    this.response_all = response;
  });

  this.filter();
  }

  filter() {
    for (const post of this.response_all) {
      if (UsersComponent.id === post.userId) {
        this.filtered = post;
      }
    }
  }

}

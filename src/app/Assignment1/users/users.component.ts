import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  static id: number;
  response: any;
  response_all: any;
  result = '';

  // heroes = HEROES;
  variableNameInParentComponent = ':)';
  // parentMessage = ':(';
  // <app-child [childMessage]="parentMessage"></app-child>

  // parentMessage = ':)';
  constructor(private http: HttpClient, private router: Router, private service: PostsService) {
    // this.service = new PostsService(http);
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      this.response_all = response;
    });
  }

  viewPosts(id: number) {
    this.service.myId = id;
    console.log('from parent - my service has: ' + this.service.myId);
    this.service.filter();
    // console.log(this.service.myId);
    this.router.navigate(['/child']);
  }
}

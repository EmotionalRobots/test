import { Component, OnInit } from '@angular/core';
import { Movie } from './Restful/Models/movie';
import { MovieserviceService } from './Restful/movieservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _opened = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}



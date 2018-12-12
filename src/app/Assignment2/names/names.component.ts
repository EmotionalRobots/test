import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  details = [{
    'name': 'Chris',
    'age': 24,
    'address': '1204 woodlake trail'
  }, {
    'name': 'Tara',
    'age': 22,
    'address': '308 Harbor Pointe Pkwy'
  }, {
    'name': 'Jake',
    'age': 28,
    'address': 'ATL'
  }];

  constructor() { }

  ngOnInit() {
  }

}

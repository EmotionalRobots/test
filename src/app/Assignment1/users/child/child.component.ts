import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PostsService } from '../../posts.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  // @Input() hero;
  // @Input('childMessage1') childMessage2: string;
  myId;
  @Input() myFilterValue: number;
  filteredList: any[] = [];
  constructor(private service: PostsService) {
    this.myId = this.service.myId;
    console.log('from child - my service id is: ' + this.myId);
    // this.service.filter();
    this.filteredList = (this.service.filtered);
    console.log('from child - my service filterd list is: ' + this.filteredList);
  }

  clear() {
    this.filteredList = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    // for
    // changes.prop contains the old and the new value...
    console.log(changes);
    console.log('HELLO');
  }

  onFilterChange() {
    console.log('test');
    this.service.myId = this.myFilterValue;
    this.service.filter();
    this.filteredList = this.service.filtered;
  }

}

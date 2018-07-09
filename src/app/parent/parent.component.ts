import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
private message: string;

  constructor() { }

  ngOnInit() {
    this.message = 'Parent Message';
  }

  recieveMsg($event) {
    this.message = $event;
  }

}

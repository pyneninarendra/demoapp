import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private message: string;

  constructor() { }

  ngOnInit() {
    this.message = 'Child Message';
  }

  sendMsg(){
  }

}

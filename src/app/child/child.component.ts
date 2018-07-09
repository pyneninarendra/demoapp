import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private message: string;
  @Output() emitMsg= new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
    this.message = 'Child Message';
  }

  sendMsg(){
    this.emitMsg.emit(this.message);
  }

}

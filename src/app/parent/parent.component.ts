import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
private message: string;

  constructor(private data: DataService) { }

  ngOnInit() {    
    this.data.currentMessage.subscribe(msg => this.message = msg);
  }




}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-hw',
  templateUrl: './list-hw.component.html',
  styleUrls: ['./list-hw.component.css'],
  styles:[`
    .myList{
      list-style-type: none;
    }
  `]
})
export class ListHwComponent implements OnInit {
  
  details = false;
  clickcount = 0;
  clickhistory = [];

  constructor() { }

  ngOnInit() {
  }

  displayDetails(){
    this.details = !this.details;
    this.clickcount+=1;
    this.clickhistory.push(this.clickcount);
  }

  getDisplay(){
    return this.details?"block":"none";
  }
  getBColor(count:number){
    return count>4?"blue":"white";
  }
  getColor(count:number){
    return count>4?"white":"black";

  }
}

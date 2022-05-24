import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.styl']
})
export class RatingComponent implements OnInit {

  @Input() rating: any;
  @Output() ratingEvent : EventEmitter<string>=new EventEmitter();
  ratingArr :any=[];

  constructor() { }

  ngOnInit() {
    //console.log(this.rating);
    this.ratingArr=Array(Math.round(this.rating)).fill(Math.round(this.rating));
     //console.log(this.ratingArr);
  }
  sendDataToParent(){
    this.ratingEvent.emit("Rating value="+ this.rating);
  }








}

























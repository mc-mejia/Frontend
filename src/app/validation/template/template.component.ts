import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.styl']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveUser(data,valid){
    if(valid){
      console.log(data);
    }

  }

}

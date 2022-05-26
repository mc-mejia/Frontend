import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
})
export class StaffComponent implements OnInit {

    staff:any=[]
    accountNumber:any ;
    accountType: String;
    status: any;
    doc:any;
    userName:any;
    password:any;
    name: String;

     dataSubscription: any;

    constructor(private _staffService: StaffService) {

     }

    ngOnInit() {
      //this.staffs=this._staffService.getProducts();//this is used when data is commming from angular
      this.dataSubscription=this._staffService.getStaff().subscribe((data)=>{//this is used when data is comming from node
       this.staff=data;
     })
    }

   color = 'accent';
checked = false;

  changed(){
   console.log(this.checked)
  }


  onChange($event) {
    console.log("Changed!!")
  }
}

import { Component, OnInit } from '@angular/core';
import {CustomerService} from "./customer.service";
import {Customer} from "../model/Customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.styl']
})
export class CustomerComponent implements OnInit {
  dataSubscription: any;
  customers:any=[];
  Enable: string="";

  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this.dataSubscription=this._customerService.getCustomer().subscribe((data)=>{
      this.customers=data;
    })
  }

  onChange(cust:Customer) {
    if(cust.approve)
      cust.approve=false;
    else
      cust.approve=true;
    this._customerService.update(cust);
  }
}

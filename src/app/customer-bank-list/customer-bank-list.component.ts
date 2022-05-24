import { Component, OnInit } from '@angular/core';
import * as internal from 'assert';
import { CustomerBankListService } from './customer-bank-list.service';

@Component({
  selector: 'app-customer-bank-list',
  templateUrl: './customer-bank-list.component.html',
  styleUrls: ['./customer-bank-list.component.styl'],
  providers:[CustomerBankListComponent]
})

export class CustomerBankListComponent implements OnInit {

  customerBankLists:any=[]
    accountId: any;
    customerAccount:any;
    balance: any;
    transaction:any;
    approve: String;
    dateOfApproval: String;
    bankAccountType: any;

  constructor(private _CustomerBankListService: CustomerBankListService) {

   }

  ngOnInit() {
    this.customerBankLists=this._CustomerBankListService.getAllCustomerBank().subscribe((data)=>{
      this.customerBankLists=data;
    });
  }
 

}

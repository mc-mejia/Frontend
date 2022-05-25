import { Component, OnInit } from '@angular/core';
import {UnapprovedBankListService} from "./unapproved-bank-list.service";
import {UnapprovedCustomer} from "../model/UnapprovedCustomer";

@Component({
  selector: 'app-unapproved-bank-list',
  templateUrl: './unapproved-bank-list.component.html',
  styleUrls: ['./unapproved-bank-list.component.styl']
})
export class UnapprovedBankListComponent implements OnInit {
  accounts: any=[]
  dataSubscription: any;


  constructor(private _UnapprovedBankListService: UnapprovedBankListService) { }

  ngOnInit() {
    this.dataSubscription = this._UnapprovedBankListService.getList().subscribe((data)=>{
      this.accounts = data;
    });
  }

  approveButton(event:any) {
    event.target.disabled=true;
    this._UnapprovedBankListService.updateList(this.accounts);

  }
}

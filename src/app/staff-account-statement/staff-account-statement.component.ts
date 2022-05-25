import { Component, OnInit } from '@angular/core';
import { StaffAccountServiceService } from './staff-account-service.service';

@Component({
  selector: 'app-staff-account-statement',
  templateUrl: './staff-account-statement.component.html',
  styleUrls: ['./staff-account-statement.component.styl']
})
export class StaffAccountStatementComponent implements OnInit {

  transaction:object=new Object();
  submitted:boolean=false;

  constructor(private _staffAccountService:StaffAccountServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this._staffAccountService.createTransaction(this.transaction)
  }

}

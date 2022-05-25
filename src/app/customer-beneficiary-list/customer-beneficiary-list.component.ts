import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerBeneficiary } from '../customer-beneficiary/customer-beneficiary';
import { CustomerBeneficiaryService } from '../customer-beneficiary/customer-beneficiary.service';

@Component({
  selector: 'app-customer-beneficiary-list',
  templateUrl: './customer-beneficiary-list.component.html',
  styleUrls: ['./customer-beneficiary-list.component.styl']
})
export class CustomerBeneficiaryListComponent implements OnInit {

  beneficiaries : CustomerBeneficiary[];
  dataSubscription : any;
  customerId : any;
  constructor(private beneficiaryService : CustomerBeneficiaryService,private router: Router) { }

  ngOnInit() {
    this.reloadData(1);
    this.customerId = 1;
  }
  reloadData(customerId: number) {
    this.dataSubscription = this.beneficiaryService.getCustomerBeneficiaries(customerId).subscribe((data) => {
      this.beneficiaries = JSON.parse(data)
      
      // this.beneficiaries=data;
    });
    
  }
  deleteBeneficiary(membershipId: number, beneficiaryId: number) {
    this.beneficiaryService.deleteBeneficiary(membershipId, beneficiaryId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData(6);
        },
        error => console.log(error));
  }

  createBeneficiary(beneficiary : CustomerBeneficiary){
    this.beneficiaryService.createBeneficiary(beneficiary)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData(beneficiary.accountNo);
        },
        error => console.log(error));
  }


}

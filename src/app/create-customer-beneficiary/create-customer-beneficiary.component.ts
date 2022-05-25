import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerBeneficiary } from '../customer-beneficiary/customer-beneficiary';
import { CustomerBeneficiaryService } from '../customer-beneficiary/customer-beneficiary.service';

@Component({
  selector: 'app-create-customer-beneficiary',
  templateUrl: './create-customer-beneficiary.component.html',
  styleUrls: ['./create-customer-beneficiary.component.styl']
})
export class CreateCustomerBeneficiaryComponent implements OnInit {

  beneficiary : CustomerBeneficiary=new CustomerBeneficiary();
  submitted = false;

  constructor(private customerBeneficiaryService: CustomerBeneficiaryService,private router:Router) { }

  ngOnInit() {
  }
  newCustomer(): void {
    this.submitted = false;
    this.beneficiary = new CustomerBeneficiary();
  }

  save() {
    this.customerBeneficiaryService.createBeneficiary(this.beneficiary)
      .subscribe(data => console.log(data), error => console.log(error));
    this.beneficiary = new CustomerBeneficiary();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/customer-beneficiary-list']);
  }

}

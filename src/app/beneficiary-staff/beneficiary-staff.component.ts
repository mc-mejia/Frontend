import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeneficiaryStaffService } from './beneficiary-staff.service';

@Component({
  selector: 'app-beneficiary-staff',
  templateUrl: './beneficiary-staff.component.html',
  styleUrls: ['./beneficiary-staff.component.styl']
})
export class BeneficiaryStaffComponent implements OnInit, OnDestroy {

  //========
  beneficiaries:any=[];
  dataSubscription: any;
  approvalReply:string;

 constructor(private _beneficiaryStaffService: BeneficiaryStaffService) {
   
  }

 ngOnInit() {
   //this.products=this._productService.getProducts();//this is used when data is commming from angular
  //  this.dataSubscription=this._productService.getProducts().subscribe((data)=>{//this is used when data is comming from node
  //   this.products=data;
    this.dataSubscription = this._beneficiaryStaffService.getUnapprovedBeneficiaries().subscribe((data)=>{
      this.beneficiaries=data;
    });
  }
 ngOnDestroy(){
   this.dataSubscription.unsubscribe();
 }

 approve(x){
   this._beneficiaryStaffService.approve(this.beneficiaries[x]);
   this.approvalReply = "Beneficiary "+this.beneficiaries[x].beneficiaryId+" Approved";
 }

//  receiveDataFromParent(value:string){
//    alert(value);
//  }

}

import { CustomerBeneficiaryService } from './customer-beneficiary.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-beneficiary',
  templateUrl: './customer-beneficiary.component.html',
  styleUrls: ['./customer-beneficiary.component.styl'],
})
export class CustomerBeneficiaryComponent implements OnInit,OnDestroy {

  beneficiaries:any=[]
  //  showHideImg: boolean=true;
  //  dataSubscription: any;


  constructor( private _beneficiaryService: CustomerBeneficiaryService, private _activatedRoute: ActivatedRoute,private _router:Router) {
    
  }

  ngOnInit(){

    this._beneficiaryService.getCustomerBeneficiaries(this._activatedRoute.snapshot.params['customerId']).subscribe(data => {
      console.log(data)
      this.beneficiaries=data;
    },error =>console.log(error));
  }

  ngOnDestroy(){
    // this.dataSubscription.unsubscribe();
  }
}

 

  // toggleImage(){
  //   this.showHideImg=!this.showHideImg;
  // }



// }

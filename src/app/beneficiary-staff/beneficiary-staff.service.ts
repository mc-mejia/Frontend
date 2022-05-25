import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryStaffService {

  constructor(private _http: HttpClient) { }
  getUnapprovedBeneficiaries(){
  /*this._http.get("http://localhost:3000/getproducts").subscribe((data)=>{
   console.log(data);
   return data;
  }); */
   return  this._http.get("http://localhost:8080/api/staff/beneficiary");
  }

  approve(x){
    this._http.put("http://localhost:8080/api/staff/beneficiary",x).subscribe({
      next: data=>{
        console.log(data);
      },
      error: error=>{
        console.log(error);
      }
    });
  }
}

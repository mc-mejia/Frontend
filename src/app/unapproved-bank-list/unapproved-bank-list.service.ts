import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UnapprovedCustomer} from "../model/UnapprovedCustomer";
@Injectable({
  providedIn: 'root'
})
export class UnapprovedBankListService {
  Url:string

  constructor(private _http: HttpClient) { }
  getList():Observable<UnapprovedCustomer>{
    // this.Url = 'http://localhost:8080/api/staff/accounts/approve';
    this.Url = 'assets/testing.json';
    return this._http.get<UnapprovedCustomer>(this.Url);

  }
  updateList(updatedAccounts:any){
    console.log(updatedAccounts);
    return this._http.put(this.Url, updatedAccounts);
  }
}

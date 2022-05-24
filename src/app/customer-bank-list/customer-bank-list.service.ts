import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerBankListService {

  constructor(private _http: HttpClient) { }

  getAllCustomerBank(){
    return this._http.get("http://localhost:8080/api/staff/accounts/approve");
  }
}

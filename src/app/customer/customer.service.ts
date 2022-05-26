import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: any[];
  Url:string;

  constructor(private _http: HttpClient) { }
  getCustomer() {
    // this.Url='http://localhost:8080/api/customer';
    this.Url='assets/testings.json';
    return this._http.get(this.Url);
  }

  update(customer) {
    return this._http.put(this.Url, this.customer);
  }
}

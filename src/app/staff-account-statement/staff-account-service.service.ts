import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffAccountServiceService {

  constructor(private _http: HttpClient) { }

  createTransaction(x){
    this._http.put("http://localhost:8080/api/staff/transfer",x).subscribe({
      next: data=>{
        console.log(data);
      },
      error: error=>{
        console.log(error);
      }
    });
  }
}

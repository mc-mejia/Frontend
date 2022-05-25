import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from '../model/Staff';

@Injectable({
  providedIn: 'root'
})
export class CreateStaffService {
private url:string;
  
    constructor(private _http: HttpClient) { 
    this.url ="http://localhost:8080/api/admin/staff";
    
    }
    
    public save(staff:Staff){
     return  this._http.post<Staff>(this.url,staff);
    }
     
    }
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Subject,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //$auth= new Subject();//here $ means its holding object of observable(that is naming convencan)
   $auth=new BehaviorSubject(this.checkLogin());
  constructor(private _router:Router) { }
  checkLogin(){
    //return true;
    return localStorage.getItem("isLoggedIn");
  }
  login(credentials){
   if(credentials.username=="admin" && credentials.password=="admin"){
    localStorage.setItem("isLoggedIn","true");
    this.$auth.next(this.checkLogin());
      this._router.navigate(['/welcome']);
     
    }else{
     alert("Please Enter valid details!!!");
     return false;
   }
  }
  logout(){
     this.$auth.next("false");
    localStorage.removeItem("isLoggedIn");
    this._router.navigate(['/login']);
    
  }
}

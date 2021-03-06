import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

    authForm :any={};
  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    //console.log(this.authForm);
  this._authService.login(this.authForm);
  }

}

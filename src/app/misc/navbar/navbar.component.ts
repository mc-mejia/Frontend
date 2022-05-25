import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  userStatus: number=1;
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    //TODO: get user's authentication here and change userStatus
    // 0: not logged in
    // 1: customer
    // 2: staff
    // 3: admin
    // ...... In the meantime, you can just change the userStatus manually for testing

    //this.userStatus=JSON.parse(this._authService.checkLogin());
      // this._authService.$auth.subscribe((data:any)=>{
      //   this.userStatus=JSON.parse(data);
      //   console.log(this.userStatus);
      // });
  }
   logout(){
     this._authService.logout();
   }

}

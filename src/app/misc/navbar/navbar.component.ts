import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  userStatus: boolean=false;
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    //this.userStatus=JSON.parse(this._authService.checkLogin());
      this._authService.$auth.subscribe((data:any)=>{
        this.userStatus=JSON.parse(data);
        console.log(this.userStatus);
      });
  }
   logout(){
     this._authService.logout();
   }

}

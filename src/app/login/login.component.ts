import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent {
 
  title:string="Welcome to login page";
   
     // declared array of months.
   months = ["January", "February", "March", "April", "May","June", "July", 
"August", "September", "October", "November", "December"];

 isavailable = false; //variable is set to true

   myClickFunction(event) {
   //just added console.log which will display the event details in browser on click of the button.
   alert("Button is clicked by "+event);
   console.log(event);
}

onClickedIrfan(value: string){
  alert("Login Component  "+value);
}
}

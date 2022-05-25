import { Component, OnInit } from '@angular/core';
import { StaffComponent } from '../staff/staff.component';
import { StaffService } from '../staff/staff.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateStaffService } from './create-staff.service';
import { Staff } from '../model/Staff';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html'
})
export class CreateStaffComponent{
    staff_name: string = "Name";
    user_name: string = "UserName";
    password: string ="password";
  
    registerServices:any[]
   
      staff:Staff=new Staff();
      staffForm!:FormGroup;
    submitted:boolean=false;
    goto: void;
    
  
    constructor(private _formBuilder:FormBuilder, 
      private registerService:CreateStaffService, 
      private router:Router){
            
      }
  
    ngOnInit():void{
      this.staffForm=this._formBuilder.group(
        {
        staffName:[''],
        userName:['',Validators.required],
        password:['',Validators.required]
  
      })
    }
  
    get f(){
      return this.staffForm.controls;
    }
    onSubmit(){
      this.registerService.save(this.staff).subscribe(result=>this.gotoStaffList());
    }
  
    gotoStaffList(){
      this.router.navigate(['/staff']);
    }
  }





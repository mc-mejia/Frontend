import { Component, OnInit } from '@angular/core';
import { StaffComponent } from '../staff/staff.component';
import { StaffService } from '../staff/staff.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.styl']
})
export class CreateStaffComponent implements OnInit {

    // staff : Staff=new Staff();
    // submitted = false;
  
    constructor(private staffService: StaffService,private router:Router) { }
  
    ngOnInit() {
    }
    // newStaff(): void {
    //   this.submitted = false;
    //   this.staff = new Staff();
    // }
  
    // save() {
    //   this.staffService.createStaff(this.staff)
    //     .subscribe(data => console.log(data), error => console.log(error));
    //   this.staff = new Staff();
    //   this.gotoList();
    // }
  
    // onSubmit() {
    //   this.submitted = true;
    //   this.save();
    // }
  
    // gotoList(){
    //   this.router.navigate(['/staffs']);
    // }
  
  }
  


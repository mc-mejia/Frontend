import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import  {OtherComponent} from './login/other.component'
import {PropertyBindingComponent} from './login/property-binding.component';
import {EventBindingComponent} from './login/event-binding.component';
import { PanelBoxComponent } from './misc/panel-box/panel-box.component';
import {HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './misc/welcome/welcome.component';
import {AuthService} from './auth/auth.service';
import { NavbarComponent } from './misc/navbar/navbar.component';
import { TemplateComponent } from './validation/template/template.component';
import { ReactiveComponent } from './validation/reactive/reactive.component';

import { BeneficiaryStaffComponent } from './beneficiary-staff/beneficiary-staff.component';
import { CustomerBankListComponent } from './customer-bank-list/customer-bank-list.component';
import { StaffAccountStatementComponent } from './staff-account-statement/staff-account-statement.component';

import { StaffComponent } from './staff/staff.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateStaffComponent } from './create-staff/create-staff.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    OtherComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    PanelBoxComponent,
    WelcomeComponent,
    NavbarComponent,
    TemplateComponent,
    ReactiveComponent,

    BeneficiaryStaffComponent,
    CustomerBankListComponent,
    StaffAccountStatementComponent,

    StaffComponent,
    CreateStaffComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

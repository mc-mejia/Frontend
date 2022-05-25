import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import  {RegisterComponent} from './register/register.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import  {OtherComponent} from './login/other.component'
import {PropertyBindingComponent} from './login/property-binding.component';
import {EventBindingComponent} from './login/event-binding.component';
import { ProductComponent } from './product/product.component';
import { ProductsPipe } from './product/products.pipe';
import { RatingComponent } from './product/rating/rating.component';
import { PanelBoxComponent } from './misc/panel-box/panel-box.component';
import { DetailsComponent } from './product/details/details.component';
import {HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './misc/welcome/welcome.component';
import {AuthService} from './auth/auth.service';
import { NavbarComponent } from './misc/navbar/navbar.component';
import { TemplateComponent } from './validation/template/template.component';
import { ReactiveComponent } from './validation/reactive/reactive.component';
import { BeneficiaryStaffComponent } from './beneficiary-staff/beneficiary-staff.component';
import { CustomerBankListComponent } from './customer-bank-list/customer-bank-list.component';
import { StaffAccountStatementComponent } from './staff-account-statement/staff-account-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    OtherComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    ProductComponent,
    ProductsPipe,
    RatingComponent,
    PanelBoxComponent,
    DetailsComponent,
    WelcomeComponent,
    NavbarComponent,
    TemplateComponent,
    ReactiveComponent,
    BeneficiaryStaffComponent,
    CustomerBankListComponent,
    StaffAccountStatementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

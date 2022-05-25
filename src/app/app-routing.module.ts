import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {RegisterComponent} from './register/register.component';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './product/details/details.component';
import { WelcomeComponent } from './misc/welcome/welcome.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './auth/login/login.component';
import { TemplateComponent } from './validation/template/template.component';
import { ReactiveComponent } from './validation/reactive/reactive.component';
import { CustomerBankListComponent } from './customer-bank-list/customer-bank-list.component';
import { StaffAccountStatementComponent } from './staff-account-statement/staff-account-statement.component';

const routes: Routes = [
  { path:'product', component: ProductComponent,canActivate:[AuthGuard] },
  { path:'product/:pId', component:DetailsComponent,canActivate:[AuthGuard] },
  { path:'template-form', component:TemplateComponent,canActivate:[AuthGuard] },
  { path:'reactive-form', component:ReactiveComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  {path:'customer-bank-list',component:CustomerBankListComponent,canActivate:[AuthGuard]},
  {path:'staff/transfer',component:StaffAccountStatementComponent},
  
 //{ path: '', component: IndexComponent ,pathMatch:"full"},
 { path: 'welcome', component: WelcomeComponent ,canActivate:[AuthGuard]},
  //{ path: 'register', component: RegisterComponent },
//  {path:"**",redirectTo:"product" },
//   {path:'', redirectTo:"product" ,pathMatch:"full"},  
  
  // {path:"**",redirectTo:'customer-bank-list'},
  // {path:'', redirectTo:'customer-bank-list',pathMatch:"full"},
  // {path:'',redirectTo:'customer/:customerId/account'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




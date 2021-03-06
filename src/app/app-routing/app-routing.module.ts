import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { EngagedProductComponent } from '../engaged-product/engaged-product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CreateInsuranceComponent } from "../create-insurance/create-insurance.component";
import { SearchInsuranceComponent } from "../search-insurance/search-insurance.component";

import { UserLoggedGuard } from "../user-logged.guard";

import { UserListingComponent } from "../user-listing/user-listing.component";



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-list', component: UserListingComponent, canActivate: [UserLoggedGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: UserDashboardComponent, canActivate: [UserLoggedGuard] },
  { path: 'create-insurance', component: CreateInsuranceComponent, canActivate: [UserLoggedGuard] },
  { path: 'engaged-list', component: EngagedProductComponent, canActivate: [UserLoggedGuard] },
  { path: 'product-list', component: ProductListComponent, canActivate: [UserLoggedGuard] },
  { path: 'product-details/:id', component: ProductDetailsComponent, canActivate: [UserLoggedGuard] },
  { path: 'search-policies', component: SearchInsuranceComponent, canActivate: [UserLoggedGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

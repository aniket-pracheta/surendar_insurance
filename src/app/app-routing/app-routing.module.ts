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

import { UserLoggedGuard } from "../user-logged.guard";



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: UserDashboardComponent,canActivate: [UserLoggedGuard]  },
  { path: 'create-insurance', component: CreateInsuranceComponent,canActivate: [UserLoggedGuard]  },
  { path: 'engaged-list', component: EngagedProductComponent, canActivate: [UserLoggedGuard]  },
  { path: 'product-list', component: ProductListComponent, canActivate: [UserLoggedGuard]  },
  { path: 'product-details', component: ProductDetailsComponent,canActivate: [UserLoggedGuard]  },
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

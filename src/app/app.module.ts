import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EngagedProductComponent } from './engaged-product/engaged-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; 

import { ReactiveFormsModule } from '@angular/forms';
import { CreateInsuranceComponent } from './create-insurance/create-insurance.component';
import { SearchInsuranceComponent } from './search-insurance/search-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UserDashboardComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    EngagedProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CreateInsuranceComponent,
    SearchInsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

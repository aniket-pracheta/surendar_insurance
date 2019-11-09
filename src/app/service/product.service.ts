import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { url } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getInsuranceList(){
    this.http.get(url.listInsurance);
  }

  getInsurancedetails(data){
    this.http.post(url.insuranceDetails,data);
  }

  insuranceCreate(data){
    this.http.post(url.insuranceCreate,data);    
  }


}

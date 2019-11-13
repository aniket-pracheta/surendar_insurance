import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { url } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, public router: Router) { }


  getInsuranceList() {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.get(url.globalUrl + url.listInsurance, { headers });
  }

  getInsurancedetails(data) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.get(url.globalUrl + url.insuranceDetails + data, { headers });
  }

  insuranceCreate(data) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post(url.globalUrl + url.insuranceCreate, data, { headers });
  }

  buyInsurance(data) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post(url.globalUrl + url.buyPolicy, data, { headers });
  }

  listBuyInsuarance(data) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.get(url.globalUrl + url.policyListing + data, { headers });
  }

  searchPlocy(data){
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.get(url.globalUrl + url.searchPloicy + data, { headers });
  }


}

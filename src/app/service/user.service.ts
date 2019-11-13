import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { url } from './constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedinUserBehv = new BehaviorSubject<any>(false);
  loggedinUser$ = this.loggedinUserBehv.asObservable();
  headers = new HttpHeaders();
  finalhead = this.headers.set('content-type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }


  userRegister(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post(url.globalUrl + url.register, data, { headers });

  }

  loginUser(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.get(url.globalUrl + url.login + data.password, { headers });
  }

  userListing() {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.get(url.globalUrl + url.userList, { headers });
  }

  setAdmin(data,userDetails) {
    localStorage.setItem('user', data);
    localStorage.setItem('userDetails',userDetails);
    this.loggedinUserBehv.next(true);
  }

  logout() {
    localStorage.setItem('user', null);
    this.loggedinUserBehv.next(false);
    this.router.navigate(['login']);
  }


  getUserType() {
    const typeUser = localStorage.getItem('user');
    return typeUser;
  }

  getLoggedInUser() {
    const testuser = localStorage.getItem('user');
    if (testuser == null) {
      this.loggedinUserBehv.next(false);
    } else {
      this.loggedinUserBehv.next(true);
    }
  }


}

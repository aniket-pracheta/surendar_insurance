import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { url } from './constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedinUserBehv = new BehaviorSubject<any>(false);
  loggedinUser$ = this.loggedinUserBehv.asObservable();

  constructor(private http: HttpClient,public router: Router) { }


  userRegister(data: any) {
    this.http.post(url.register, data);
  }

  loginUser(data: any) {
    this.http.post(url.login, data)
  }

  userListing() {
    this.http.get(url.userList)
  }

  setAdmin(data) {
    localStorage.setItem('user', data);
    this.loggedinUserBehv.next(true);
  }

  logout() {
    localStorage.setItem('user', null);
    this.loggedinUserBehv.next(false);
    this.router.navigate(['login']);
  }


  getUserType(){
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

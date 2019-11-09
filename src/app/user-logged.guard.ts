import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from "./service/user.service";


@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate   {

  checkUserLoggin = false;

  constructor(public userService:UserService, public router: Router) {
    this.userService.loggedinUser$.subscribe((val)=>{
      this.checkUserLoggin = val;
  });
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log('--guard',this.checkUserLoggin);
    if(!this.checkUserLoggin){
      this.router.navigate(['login']);
    return this.checkUserLoggin;
    }
    return this.checkUserLoggin;
  }
  
}

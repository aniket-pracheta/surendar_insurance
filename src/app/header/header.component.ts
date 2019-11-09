import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  checkUserLoggin =false;

  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.loggedinUser$.subscribe((val)=>{
        this.checkUserLoggin = val;
    });
  }

  logout(){
    this.userService.logout();
  }

}

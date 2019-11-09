import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  usertype: any;

  constructor(public userService: UserService) {
    this.usertype = this.userService.getUserType();
  }

  ngOnInit() {
  }

}

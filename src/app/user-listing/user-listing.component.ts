import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  detailData: any ;
  constructor(public userService:UserService) {  }

  ngOnInit() {

    this.userService.userListing().subscribe((data:any) => {
      console.log('user  data--->', data);
      this.detailData = data;
      // this.router.navigate(['product-list']);
    });
  }

}

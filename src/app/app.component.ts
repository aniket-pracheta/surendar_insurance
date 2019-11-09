import { Component,OnInit } from '@angular/core';
import { UserService } from "./service/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'insurance-project';

  constructor(public userService:UserService,public router:Router,) {

  let temp =  localStorage.getItem('user');
    // this.userService.loggedinUser$.subscribe((val)=>{
      // if(temp == null ){
      //   this.router.navigate(['login']);
      // }else{
      //   this.router.navigate(['home']);       
      // }
  // });
   }

   ngOnInit() {
    let temp =  localStorage.getItem('user');
    this.userService.getLoggedInUser();
  }

}

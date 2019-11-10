import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  profileForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public userService: UserService,
    public router: Router,
    public formBuilder: FormBuilder) {
    this.userService.loggedinUser$.subscribe((val) => {
      if (val) {
        this.router.navigate(['home']);
      }
    });
  }


  ngOnInit() {

  }

  Login() {
    console.log('--->', this.profileForm.value);
    if (this.profileForm.value.email == 'admin' && this.profileForm.value.password == 'admin') {
      this.userService.setAdmin('admin');
      this.router.navigate(['home']);
    } else {
      this.userService.loginUser(this.profileForm.value);
      this.userService.setAdmin('user');
      this.router.navigate(['home']);
    }

  }

}

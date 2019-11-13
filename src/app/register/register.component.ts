import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from "../service/user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  // profileForm = new FormGroup({
  //   firstName: new FormControl('',Validators.required),
  //   lastName: new FormControl(''),
  // });

  profileForm = this.formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required]],
    gender: ['', Validators.required],
    dob: ['', Validators.required],
    contact_number: ['', Validators.required]
  });

  constructor(public formBuilder: FormBuilder,
    public router: Router,
    public userService: UserService) { }

  ngOnInit() {
  }

  checkpasswor() {
    if (this.profileForm.value.password == this.profileForm.value.confirmPassword) {
      return true;
    } else {
      alert('Please check password and confirm password');
    }
  }

  register() {
    // this.checkpasswor();
    if (this.checkpasswor()) {
      console.log('-->', this.profileForm.value);
      this.userService.userRegister(this.profileForm.value).subscribe((data) => {
        console.log('data--->', data);
        this.router.navigate(['login']);
      });
    }

  }

}

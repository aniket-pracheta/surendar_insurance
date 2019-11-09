import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

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
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',Validators.required],    
    password:['',Validators.required],
    passwordConfirm:['',[Validators.required]],
    gender:['',Validators.required],
    dateOfBirth:['',Validators.required]
  });

  constructor( public formBuilder :FormBuilder ) { }

  ngOnInit() {
  }

  checkpasswor(){
    if(this.profileForm.value.password === this.profileForm.value.passwordConfirm){
      return true;
    }else{
      alert('Please check password and confirm password');
    }
  }

  register(){
    this.checkpasswor();
    if(this.checkpasswor()){
      console.log('-->',this.profileForm.value);
      
    }
    
  }

}

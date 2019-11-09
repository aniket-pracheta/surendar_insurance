import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-insurance.component.html',
  styleUrls: ['./create-insurance.component.scss']
})
export class CreateInsuranceComponent implements OnInit {

  profileForm = this.formBuilder.group({
    title: ['',Validators.required],
    description: ['',Validators.required],
    email: ['',Validators.required],    
    password:['',Validators.required],
    passwordConfirm:['',[Validators.required]],
    gender:['',Validators.required],
    dateOfBirth:['',Validators.required]
  });

  constructor( public formBuilder :FormBuilder ) { }

  ngOnInit() {
    console.log('---->',this.profileForm.value);
  }


  createInsurance(){    
  }

}

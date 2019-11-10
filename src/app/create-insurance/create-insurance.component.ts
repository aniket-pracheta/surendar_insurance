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
    cover_amount: ['',Validators.required],    
    base_amount_for_person:['',Validators.required],
    disabled_person:['true',[Validators.required]],
    medical_history:['true',Validators.required]
  });

  constructor( public formBuilder :FormBuilder ) { }

  ngOnInit() {
    // console.log('---->',this.profileForm.value);

  }


  createInsurance(){    
    console.log('---->',this.profileForm.value);
   
  }

}

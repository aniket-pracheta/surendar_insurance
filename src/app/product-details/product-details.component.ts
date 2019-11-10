import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

// This lets me use jquery
declare var $: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  detailData: any = { "title": "new india insure", "description": "it covers accident\nwill ensure you are safe\nwill not cover to you family\n\nbut stay alert", "cover_amount": 250000, "base_amount_for_person": 5000, "disabled_person": "false", "medical_history": "true" };

  profileForm = this.formBuilder.group({
    recipient_name: ['', Validators.required],
    recipient_age: ['', Validators.required],
    recipient_adhar_no: ['', Validators.required],
    recipient_contact: ['', Validators.required],
    recipient_disabled: ['true', [Validators.required]],
    recipient_medical_history: ['true', Validators.required]
  });

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  openModal() {
    $("#exampleModal").modal('show');
  }

  getrecipientDeatils() {
    console.log('form details--->', this.profileForm.value);
    $("#exampleModal").modal('hide');
  }

  checkButtonVlaid(){
    if( (this.detailData.disabled_person != this.profileForm.value.recipient_disabled) && (this.detailData.medical_history != this.profileForm.value.recipient_medical_history)){
      return false;
    }return true;
  }



}

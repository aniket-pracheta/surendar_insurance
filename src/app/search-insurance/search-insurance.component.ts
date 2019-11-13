import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from "../service/product.service";


@Component({
  selector: 'app-search-insurance',
  templateUrl: './search-insurance.component.html',
  styleUrls: ['./search-insurance.component.scss']
})
export class SearchInsuranceComponent implements OnInit {

  profileForm = this.formBuilder.group({
    recipient_name: ['', Validators.required],
    recipient_age: ['', Validators.required],
    recipient_adhar_no: ['', Validators.required],
    recipient_disabled: ['true', [Validators.required]],
    recipient_medical_history: ['true', Validators.required]
  });

  constructor(public formBuilder: FormBuilder, public productService: ProductService) { }

  policyList:any;

  ngOnInit() {
  }

  Search(){

    let data = 'disabled_person='+this.profileForm.value.recipient_disabled+'&medical_history='+this.profileForm.value.recipient_medical_history;
    this.productService.searchPlocy(data).subscribe((data:any) => {
      console.log('create data--->', data);
      this.policyList = data;
      if(data.successToken == "true"){
        this.policyList = data.users;
      }
    });
  }

}

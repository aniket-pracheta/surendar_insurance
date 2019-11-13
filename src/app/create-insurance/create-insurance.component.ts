import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ProductService } from "../service/product.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-insurance',
  templateUrl: './create-insurance.component.html',
  styleUrls: ['./create-insurance.component.scss']
})
export class CreateInsuranceComponent implements OnInit {

  profileForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    cover_amount: ['', Validators.required],
    base_amount_for_person: ['', Validators.required],
    disabled_person: ['true', [Validators.required]],
    medical_history: ['true', Validators.required]
  });

  constructor(public formBuilder: FormBuilder, public router: Router, public productService: ProductService) { }

  ngOnInit() {
    // console.log('---->',this.profileForm.value);
  }


  createInsurance() {
    console.log('---->', this.profileForm.value);

    this.productService.insuranceCreate(this.profileForm.value).subscribe((data)=>{
        console.log('create data--->',data);
        this.router.navigate(['product-list']);
    });

  }

}

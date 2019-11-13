import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from "../service/product.service";
import { Router,ActivatedRoute } from '@angular/router';



// This lets me use jquery
declare var $: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  detailData: any ;
//  { "title": "new india insure", "description": "it covers accident\nwill ensure you are safe\nwill not cover to you family\n\nbut stay alert", "cover_amount": 250000, "base_amount_for_person": 5000, "disabled_person": "false", "medical_history": "true" };

  profileForm = this.formBuilder.group({
    recipient_name: ['', Validators.required],
    recipient_age: ['', Validators.required],
    recipient_adhar_no: ['', Validators.required],
    recipient_contact: ['', Validators.required],
    recipient_disabled: ['true', [Validators.required]],
    recipient_medical_history: ['true', Validators.required]
  });

  constructor(public formBuilder: FormBuilder,public router: Router, public route:ActivatedRoute, public productService: ProductService) { }

  policyDetails:any;
  shoeInsuranceButton = false;

  ngOnInit() {

    let userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(userDetails){
      this.shoeInsuranceButton = true;
    }

    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getInsurancedetails(id).subscribe((data) => {
      console.log('details data--->', data);
      this.detailData = data;
      // this.router.navigate(['product-list']);
    });
  }

  returnPremeium(){
    if(this.profileForm.value.recipient_age > 0){
    return (this.detailData.base_amount_for_person +(100*this.profileForm.value.recipient_age))
    }
  }

  openModal() {
    $("#exampleModal").modal('show');
  }

  getrecipientDeatils() {
    console.log('form details--->', this.profileForm.value);
    
    if(this.checkButtonVlaid()){
      let data = this.profileForm.value;
      let userDetails = JSON.parse(localStorage.getItem('userDetails'));
      data.user_id = userDetails._id;
      data.policy_id = this.detailData._id;

      this.productService.buyInsurance(data).subscribe((data)=>{
        console.log('buy data success--->',data);
        $("#exampleModal").modal('hide');
        alert('Insurance Taken successfully...!');
        this.router.navigate(['/engaged-list']);
      });

    }else{
      alert('Please check the policy for Medical History & Medically Disabled for seleced Insurance');
    }
  }

  checkButtonVlaid(){
    if( (this.detailData.disabled_person != this.profileForm.value.recipient_disabled) || (this.detailData.medical_history != this.profileForm.value.recipient_medical_history)){
      return false;
    }return true;
  }

  submitPlocy(){
    
  }



}

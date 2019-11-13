import { Component, OnInit } from '@angular/core';

import { ProductService } from "../service/product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(public router: Router, public productService: ProductService) { }

  policyList: any;


  ngOnInit() {

    this.productService.getInsuranceList().subscribe((data:any) => {
      console.log('create data--->', data);
      if(data.successToken == "true"){
        this.policyList = data.users;
      }
    
      // this.router.navigate(['product-list']);
    });

  }

}

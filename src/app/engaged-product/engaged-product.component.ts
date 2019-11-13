import { Component, OnInit } from '@angular/core';
import { ProductService } from "../service/product.service";


@Component({
  selector: 'app-engaged-product',
  templateUrl: './engaged-product.component.html',
  styleUrls: ['./engaged-product.component.scss']
})
export class EngagedProductComponent implements OnInit {

  detailData: any;

  constructor(public productService: ProductService) { }


  ngOnInit() {

    let userDetails = JSON.parse(localStorage.getItem('userDetails'));
    // data.user_id = userDetails._id;

    this.productService.listBuyInsuarance(userDetails._id).subscribe((data:any) => {
      console.log('create data--->', data);
        this.detailData = data;    
      // this.router.navigate(['product-list']);
    });
  }

}

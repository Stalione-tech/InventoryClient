import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() { }

  public allProducts : any = [
    {
      p_id : '1',
      product_name : 'Door',
      product_weight : '30 in. X 80 in.',
      product_price : '3000',
      product_image : '/assets/images/door.jpg'
    },
    {
      p_id : '2',
      product_name : 'Window',
      product_weight : '24 in. x 36 in.',
      product_price : '1000',
      product_image : '/assets/images/window.jpg'
    },
    {
      p_id : '3',
      product_name : 'Table',
      product_weight : '36 in. x 48 in.',
      product_price : '2000',
      product_image : '/assets/images/table.jpg'
    },
    {
      p_id : '4',
      product_name : 'Chair',
      product_weight : '3-4 feet',
      product_price : '2000',
      product_image : '/assets/images/chair.jpg'
    },
  ]
  ngOnInit() {
  }

}

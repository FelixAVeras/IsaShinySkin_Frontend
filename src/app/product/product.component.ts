import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

}

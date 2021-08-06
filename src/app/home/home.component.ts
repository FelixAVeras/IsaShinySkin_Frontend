import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductsService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

}

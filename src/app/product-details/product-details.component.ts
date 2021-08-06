import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  product: Product | undefined;
  currentproduct = null;

  constructor(private productService: ProductsService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe((data: Product) => {
      this.product = data;
    });
  }
}

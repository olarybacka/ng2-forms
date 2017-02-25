import { Product } from './../product';
import { Component, OnInit } from '@angular/core';


const productData = [
  {
    'id': 2,
    'name': 'Zupa',
    'description': 'pyszna zupa'
  },
  {
    'id': 2,
    'name': 'kalosze',
    'description': 'super modne'
    },
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedProduct;

  constructor() { }

  ngOnInit() {
    this.products = productData;
  }

  onSelect(product) {
    this.selectedProduct = product;
  }
}

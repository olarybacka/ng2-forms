import { Product } from './../product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product(1, null, null, null);
  submitted = false;
  categories = ['agd', 'rtv', 'spożywcze'];


  newHero() {
  }


  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
    this.submitted = true;
    console.log(form.value);
  }
  resetForm(form){
    this.submitted = true;
    form.reset();    
  }

}

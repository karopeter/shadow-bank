import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productName = 'A Book';
  isDisabled = true;
  products = ['A Book', 'A Tree'];

  constructor() {
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
    }, 3000);
   }

   onAddProduct(form: NgForm): void {
    //  this.products.push(this.productName);
    if (form.valid) {
      this.products.push(form.value.productName);
    }
   }

   onRemoveProduct(productName: string): void {
     this.products = this.products.filter(p => p !== productName);
   }

  ngOnInit(): void {
  }

}

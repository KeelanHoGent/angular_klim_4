import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../types/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  @Output() public deletedProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  deleteProduct(): boolean {
    console.log(this.product);
    this.deletedProduct.emit(this.product);
    return false;
  }

}

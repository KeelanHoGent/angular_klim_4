import {Component, Input, OnInit} from '@angular/core';
import {ProductTemplate} from '../../types/productTemplate.model';

@Component({
  selector: 'app-horizontal-list-products',
  templateUrl: './horizontal-list-products.component.html',
  styleUrls: ['./horizontal-list-products.component.css']
})
export class HorizontalListProductsComponent implements OnInit {

  @Input() list: ProductTemplate[];
  @Input() ListTitle: string;

  constructor() { }

  ngOnInit() {
  }

  deleteProduct(p: ProductTemplate) {
    let index = this.list.indexOf(p);
    this.list.splice(index, 1);
  }
}

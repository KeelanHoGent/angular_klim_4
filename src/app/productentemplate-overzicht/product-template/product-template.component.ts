import { Component, OnInit, Input } from '@angular/core';
import { ProductTemplate } from 'src/app/types/productTemplate.model';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {

  @Input() public productTemplate: ProductTemplate;

  constructor() { }

  ngOnInit() {
  }

}

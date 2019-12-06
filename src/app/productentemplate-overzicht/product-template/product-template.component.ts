import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProductTemplate } from 'src/app/types/productTemplate.model';
import {Product} from '../../types/product.model';
import {TemplateService} from '../../services/template.service';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {

  @Input() public productTemplate: ProductTemplate;
  @Output() public deletedProduct = new EventEmitter<ProductTemplate>();
  public productFotoSrc = '';

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.productFotoSrc = this.productTemplate.image;
  }

  deleteProduct(): boolean {
    this.deletedProduct.emit(this.productTemplate);
    console.log(this.productTemplate);
    this.templateService.deleteProductTemplate(this.productTemplate).subscribe();
    return false;
  }

  showDefaultImage() {
    this.productFotoSrc = 'assets/images/image-not-found.png';
  }
}

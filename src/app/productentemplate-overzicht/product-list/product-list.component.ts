import { Component, OnInit } from '@angular/core';
import { ProductTemplate } from 'src/app/types/productTemplate.model';
import {TemplateService} from '../../services/template.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productTemplates: ProductTemplate[];
  public loader = true;

  constructor(
      private _templateDataService: TemplateService
  ) {  }

  ngOnInit() {
    this._templateDataService.getProductTemplates$().subscribe(pt => this.productTemplates = pt);
    this.loader = false;
  }

}

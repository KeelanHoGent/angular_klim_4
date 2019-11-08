import { Component, OnInit } from '@angular/core';
import { ProductTemplate } from 'src/app/types/productTemplate.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public _productTemplates: ProductTemplate[];

  constructor() { 

    
    this._productTemplates = new Array<ProductTemplate>();
    //volgende is gewoon voor iets te zien bij stylen
    const p1 = new ProductTemplate();
    const p2 = new ProductTemplate();
    p1.name = "Hout";
    p1.description = "Heel millieuvriendelijk";
    p2.name = "Plastiek";
    p2.description = "slecht voor het millieu";
    this._productTemplates.push(p1);
    this._productTemplates.push(p2);
    // 
  }

  ngOnInit() {

  }

}

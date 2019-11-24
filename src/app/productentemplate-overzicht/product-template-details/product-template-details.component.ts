import {Component, Input, OnInit} from '@angular/core';
import {ProductTemplate} from '../../types/productTemplate.model';
import {ActivatedRoute} from '@angular/router';
import {TemplateService} from '../../services/template.service';

@Component({
  selector: 'app-product-template-details',
  templateUrl: './product-template-details.component.html',
  styleUrls: ['./product-template-details.component.css']
})
export class ProductTemplateDetailsComponent implements OnInit {
  public productTemp: ProductTemplate;

  constructor(private route: ActivatedRoute, private templateService: TemplateService) { }

  ngOnInit() {
    this.route.data.subscribe(item => {
      console.log(item);
      return this.productTemp = item['productTemp']
    });
  }

}

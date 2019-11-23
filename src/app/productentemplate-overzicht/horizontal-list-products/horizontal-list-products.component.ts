import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../types/project.model';

@Component({
  selector: 'app-horizontal-list-products',
  templateUrl: './horizontal-list-products.component.html',
  styleUrls: ['./horizontal-list-products.component.css']
})
export class HorizontalListProductsComponent implements OnInit {

  @Input() list: Project[];
  @Input() ListTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

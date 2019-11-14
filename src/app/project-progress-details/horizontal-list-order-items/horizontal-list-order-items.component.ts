import { Component, OnInit, Input } from '@angular/core';
import { Group } from 'src/app/types/group.model';
import { OrderItem } from 'src/app/types/orderItem.model';

@Component({
  selector: 'app-horizontal-list-order-items',
  templateUrl: './horizontal-list-order-items.component.html',
  styleUrls: ['./horizontal-list-order-items.component.css']
})
export class HorizontalListOrderItemsComponent implements OnInit {

  @Input() list: OrderItem[];
  @Input() ListTitle: string;

  constructor() { 

  }

  ngOnInit() {
  }

}

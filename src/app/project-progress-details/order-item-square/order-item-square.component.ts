import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from 'src/app/types/orderItem.model';

@Component({
  selector: 'app-order-item-square',
  templateUrl: './order-item-square.component.html',
  styleUrls: ['./order-item-square.component.css']
})
export class OrderItemSquareComponent implements OnInit {
  @Input() orderItem: OrderItem;

  constructor() { }

  ngOnInit() {
  }

}

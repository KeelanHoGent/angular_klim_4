import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemSquareComponent } from './order-item-square.component';

describe('OrderItemSquareComponent', () => {
  let component: OrderItemSquareComponent;
  let fixture: ComponentFixture<OrderItemSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

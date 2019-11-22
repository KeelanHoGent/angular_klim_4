import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListOrderItemsComponent } from './horizontal-list-order-items.component';

describe('HorizontalListOrderItemsComponent', () => {
  let component: HorizontalListOrderItemsComponent;
  let fixture: ComponentFixture<HorizontalListOrderItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalListOrderItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalListOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

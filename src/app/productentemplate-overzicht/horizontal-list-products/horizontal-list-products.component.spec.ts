import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListProductsComponent } from './horizontal-list-products.component';

describe('HorizontalListProductsComponent', () => {
  let component: HorizontalListProductsComponent;
  let fixture: ComponentFixture<HorizontalListProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalListProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

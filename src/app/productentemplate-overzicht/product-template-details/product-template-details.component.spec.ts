import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateDetailsComponent } from './product-template-details.component';

describe('ProductTemplateDetailsComponent', () => {
  let component: ProductTemplateDetailsComponent;
  let fixture: ComponentFixture<ProductTemplateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTemplateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

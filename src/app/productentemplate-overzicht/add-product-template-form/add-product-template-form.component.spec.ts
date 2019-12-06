import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTemplateFormComponent } from './add-product-template-form.component';

describe('AddProductTemplateFormComponent', () => {
  let component: AddProductTemplateFormComponent;
  let fixture: ComponentFixture<AddProductTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

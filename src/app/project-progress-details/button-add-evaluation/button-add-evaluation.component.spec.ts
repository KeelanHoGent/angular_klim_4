import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddEvaluationComponent } from './button-add-evaluation.component';

describe('ButtonAddEvaluationComponent', () => {
  let component: ButtonAddEvaluationComponent;
  let fixture: ComponentFixture<ButtonAddEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAddEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

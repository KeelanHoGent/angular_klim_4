import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCAddButtonComponent } from './evaluation-c-add-button.component';

describe('EvaluationCAddButtonComponent', () => {
  let component: EvaluationCAddButtonComponent;
  let fixture: ComponentFixture<EvaluationCAddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationCAddButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationCAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

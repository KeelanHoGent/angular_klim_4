import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCFormComponent } from './evaluation-c-form.component';

describe('EvaluationCFormComponent', () => {
  let component: EvaluationCFormComponent;
  let fixture: ComponentFixture<EvaluationCFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationCFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCComponent } from './evaluation-c.component';

describe('EvaluationCComponent', () => {
  let component: EvaluationCComponent;
  let fixture: ComponentFixture<EvaluationCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

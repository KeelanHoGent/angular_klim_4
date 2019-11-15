import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationSquareComponent } from './evaluation-square.component';

describe('EvaluationSquareComponent', () => {
  let component: EvaluationSquareComponent;
  let fixture: ComponentFixture<EvaluationSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

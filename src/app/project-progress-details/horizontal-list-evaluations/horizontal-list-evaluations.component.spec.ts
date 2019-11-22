import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListEvaluationsComponent } from './horizontal-list-evaluations.component';

describe('HorizontalListEvaluationsComponent', () => {
  let component: HorizontalListEvaluationsComponent;
  let fixture: ComponentFixture<HorizontalListEvaluationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalListEvaluationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalListEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

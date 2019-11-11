import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEvaluationsControllerComponent } from './group-evaluations-controller.component';

describe('GroupEvaluationsControllerComponent', () => {
  let component: GroupEvaluationsControllerComponent;
  let fixture: ComponentFixture<GroupEvaluationsControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEvaluationsControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEvaluationsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

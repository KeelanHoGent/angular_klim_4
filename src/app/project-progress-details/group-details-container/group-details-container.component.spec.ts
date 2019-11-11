import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailsContainerComponent } from './group-details-container.component';

describe('GroupDetailsContainerComponent', () => {
  let component: GroupDetailsContainerComponent;
  let fixture: ComponentFixture<GroupDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

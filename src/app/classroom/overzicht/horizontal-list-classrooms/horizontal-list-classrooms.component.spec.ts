import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListClassroomsComponent } from './horizontal-list-classrooms.component';

describe('HorizontalListClassroomsComponent', () => {
  let component: HorizontalListClassroomsComponent;
  let fixture: ComponentFixture<HorizontalListClassroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalListClassroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalListClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

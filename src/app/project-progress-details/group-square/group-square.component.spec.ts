import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSquareComponent } from './group-square.component';

describe('GroupSquareComponent', () => {
  let component: GroupSquareComponent;
  let fixture: ComponentFixture<GroupSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

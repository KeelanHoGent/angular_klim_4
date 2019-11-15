import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListGroupsComponent } from './horizontal-list-groups.component';

describe('HorizontalListGroupsComponent', () => {
  let component: HorizontalListGroupsComponent;
  let fixture: ComponentFixture<HorizontalListGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalListGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

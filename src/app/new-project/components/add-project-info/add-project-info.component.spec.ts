import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectInfoComponent } from './add-project-info.component';

describe('AddProjectInfoComponent', () => {
  let component: AddProjectInfoComponent;
  let fixture: ComponentFixture<AddProjectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

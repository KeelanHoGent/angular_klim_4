import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSquareComponent } from './project-square.component';

describe('ProjectSquareComponent', () => {
  let component: ProjectSquareComponent;
  let fixture: ComponentFixture<ProjectSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

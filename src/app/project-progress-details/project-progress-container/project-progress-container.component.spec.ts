import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProgressContainerComponent } from './project-progress-container.component';

describe('ProjectProgressContainerComponent', () => {
  let component: ProjectProgressContainerComponent;
  let fixture: ComponentFixture<ProjectProgressContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProgressContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProgressContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

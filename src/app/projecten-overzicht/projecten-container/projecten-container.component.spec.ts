import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectenContainerComponent } from './projecten-container.component';

describe('ProjectenContainerComponent', () => {
  let component: ProjectenContainerComponent;
  let fixture: ComponentFixture<ProjectenContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectenContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

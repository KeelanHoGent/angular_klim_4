import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectenTemplateDetailComponent } from './projecten-template-detail.component';

describe('ProjectenTemplateDetailComponent', () => {
  let component: ProjectenTemplateDetailComponent;
  let fixture: ComponentFixture<ProjectenTemplateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectenTemplateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectenTemplateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

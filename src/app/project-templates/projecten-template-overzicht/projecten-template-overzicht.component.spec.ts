import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectenTemplateOverzichtComponent } from './projecten-template-overzicht.component';

describe('ProjectenTemplateOverzichtComponent', () => {
  let component: ProjectenTemplateOverzichtComponent;
  let fixture: ComponentFixture<ProjectenTemplateOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectenTemplateOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectenTemplateOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

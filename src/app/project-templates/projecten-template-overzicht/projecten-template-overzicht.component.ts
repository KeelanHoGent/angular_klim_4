import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectTemplate } from '../../types/project-template-model';
import { ProjectTemplateService } from '../../services/project-template.service';

@Component({
  selector: 'app-projecten-template-overzicht',
  templateUrl: './projecten-template-overzicht.component.html',
  styleUrls: ['./projecten-template-overzicht.component.css']
})
export class ProjectenTemplateOverzichtComponent implements OnInit {

  public templates: ProjectTemplate[] = [
    new ProjectTemplate('project met vuur', 'Een project met vuurproefjes', 'test', true, 1),
    new ProjectTemplate('project met water', 'Een project met een waterrad', 'test', true, 1),
    new ProjectTemplate('project met aarde', 'Een project met soorten gesteentes', 'test', true, 1),
    new ProjectTemplate('project met plastiek', 'Een project met plastiek speelgoed', 'test', true, 1),
    new ProjectTemplate( 'project met zeep', 'Een project met groene zeep',  'test', true, 1),
    new ProjectTemplate( 'project met olie', 'Een project met verschillende soorten olie', 'test', true, 1),
    new ProjectTemplate('project met karton', 'Een project over het gebruik van karton', 'test', true, 1)
  ];
  private projects: Observable<ProjectTemplate[]>;
  private currentProjectTemplate: ProjectTemplate;
  selectedProjectTemplate: ProjectTemplate;

  constructor() { }

ngOnInit() {

  }
  onSelect(projectTemplate: ProjectTemplate): void {
    this.currentProjectTemplate = projectTemplate;
    window.location.hash = '#huidigTemplate';
  }

}

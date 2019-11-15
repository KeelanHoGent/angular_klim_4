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

  public templates: ProjectTemplate[];
  private projects: Observable<ProjectTemplate[]>;
  private currentProjectTemplate: ProjectTemplate;
  selectedProjectTemplate: ProjectTemplate;
  public loader = true;
  constructor(private _projecttemplateDataService: ProjectTemplateService) {
    this.projects = this._projecttemplateDataService.getProjectTemplates$();
   }

ngOnInit() {
  this._projecttemplateDataService.getProjectTemplates$().subscribe(t => this.templates = t);
  }
  onSelect(projectTemplate: ProjectTemplate): void {
    this.currentProjectTemplate = projectTemplate;
    window.location.hash = '#huidigTemplate';
  }

}

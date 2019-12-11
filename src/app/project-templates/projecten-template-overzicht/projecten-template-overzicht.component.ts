import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectTemplate } from '../../types/projectTemplate.model';
import { ApplicationDomain } from 'src/app/types/applicationDomain.model';
import { ProjectService } from 'src/app/services/project.service';
import {TemplateService} from '../../services/template.service';


@Component({
  selector: 'app-projecten-template-overzicht',
  templateUrl: './projecten-template-overzicht.component.html',
  styleUrls: ['./projecten-template-overzicht.component.css',
  '../../shared/button.css']
})
export class ProjectenTemplateOverzichtComponent implements OnInit {

  public status: number = 0;
  public templates: ProjectTemplate[];
  private projects: Observable<ProjectTemplate[]>;
  public domains: ApplicationDomain[] = [];
  public loader = true;
  constructor(private _projecttemplateDataService: TemplateService,
              private _projectDataService: ProjectService) {
    this.projects = this._projecttemplateDataService.getProjectTemplates$();
   }

ngOnInit() {
  this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);
  this._projecttemplateDataService.getProjectTemplates$().subscribe(t => {
    this.templates = t;
    this.loader = false;
  });
  }

}

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

  private projects: Observable<ProjectTemplate[]>;
  private currentProjectTemplate: ProjectTemplate;

  constructor(private ps: ProjectTemplateService) { }

  ngOnInit() {
    
  }

}

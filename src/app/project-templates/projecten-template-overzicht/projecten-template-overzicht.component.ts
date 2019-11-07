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
    { _id: 1, _name: 'project met vuur', _descr: 'Een project met vuurproefjes', _image: 'test'},
    { _id: 1, _name: 'project met water', _descr: 'Een project met een waterrad', _image: 'test'},
    { _id: 1, _name: 'project met aarde', _descr: 'Een project met soorten gesteentes', _image: 'test'},
    { _id: 1, _name: 'project met plastiek', _descr: 'Een project met plastiek speelgoed', _image: 'test'},
    { _id: 1, _name: 'project met zeep', _descr: 'Een project met groene zeep', _image: 'test'},
    { _id: 1, _name: 'project met olie', _descr: 'Een project met verschillende soorten olie', _image: 'test'},
    { _id: 1, _name: 'project met karton', _descr: 'Een project over het gebruik van karton', _image: 'test'}
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

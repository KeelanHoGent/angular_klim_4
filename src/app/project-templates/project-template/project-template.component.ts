import {Component, Input, OnInit} from '@angular/core';
import {ProjectTemplate} from "../../types/projectTemplate.model";

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.css']
})
export class ProjectTemplateComponent implements OnInit {

  @Input() public template: ProjectTemplate;
  public projectFotoSrc = 'http://www.ifabpartners.com/wp-content/uploads/2015/12/IFAB_services_integrated_project_MAIN1.jpg';

  constructor() { }

  ngOnInit() {
  }

  showDefaultImage() {
    this.projectFotoSrc = 'assets/images/image-not-found.png';
  }
}

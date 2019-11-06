import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { Project } from "../../types/project.model";

@Component({
  selector: 'app-projecten-container',
  templateUrl: './projecten-container.component.html',
  styleUrls: ['./projecten-container.component.css']
})
export class ProjectenContainerComponent implements OnInit {

  public projects: Project[] = [];

  constructor(private ps: ProjectService) { }

  ngOnInit() {
    this.ps.getProjects$().subscribe(ps => this.projects = ps);
  }
}

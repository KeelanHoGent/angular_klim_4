import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Observable} from "rxjs";
import {Project} from "../../types/project.model";

@Component({
  selector: 'app-projecten-container',
  templateUrl: './projecten-container.component.html',
  styleUrls: ['./projecten-container.component.css']
})
export class ProjectenContainerComponent implements OnInit {

  private projects: Observable<Project[]>;
  private currentProject: Project;
  displayedColumns: string[] = ['name', 'budget'];

  constructor(private ps: ProjectService) { }

  ngOnInit() {
    this.projects = this.ps.getProjects$();
    this.ps.getProject$(1).subscribe(p => this.currentProject = p) ;
  }
}

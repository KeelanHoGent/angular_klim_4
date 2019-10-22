import { Component, OnInit } from '@angular/core';
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

  constructor(private ps: ProjectService) { }

  ngOnInit() {
    this.projects = this.ps.projects$;
  }
}

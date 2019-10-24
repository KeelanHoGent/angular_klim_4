import { Component, OnInit, KeyValueChanges, Input } from '@angular/core';
import { Project } from '../types/project.model';
import { Observable } from 'rxjs';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() public project: Project;
  constructor(private _projectService: ProjectService) { 

  }

  ngOnInit() {
  }

  get projects$(): Observable<Project[]> {
    return this._projectService.projects$;
  }

}

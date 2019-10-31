import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../types/project.model";

@Component({
  selector: 'app-project-square',
  templateUrl: './project-square.component.html',
  styleUrls: ['./project-square.component.css']
})
export class ProjectSquareComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}

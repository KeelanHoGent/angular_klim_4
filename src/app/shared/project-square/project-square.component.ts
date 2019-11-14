import { Component, Input, OnInit } from '@angular/core';
import { Project } from "../../types/project.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-square',
  templateUrl: './project-square.component.html',
  styleUrls: ['./project-square.component.css']
})
export class ProjectSquareComponent implements OnInit {
  @Input() public project: Project;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  editProject(){
    this.router.navigate(['/editProject'], { queryParams: { id: this.project.id } });
  }

}

import { Component, OnInit } from '@angular/core';
import {ProductTemplate} from "../../../types/productTemplate.model";
import {TemplateService} from "../../../services/template.service";
import {Classroom} from "../../../types/classroom.model";
import {ClassroomService} from "../../../services/classroom.service";

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent implements OnInit {

  public classrooms: Classroom[];
  public loader = true;

  constructor(
    private _classroomService: ClassroomService
  ) {  }

  ngOnInit() {
    this._classroomService.getClassrooms$().subscribe(pt => {
      this.classrooms = pt;
      this.loader = false;
    });
  }

}

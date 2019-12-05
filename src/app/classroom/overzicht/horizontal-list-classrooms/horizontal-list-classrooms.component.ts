import {Component, Input, OnInit} from '@angular/core';
import {ProductTemplate} from "../../../types/productTemplate.model";
import {Classroom} from "../../../types/classroom.model";

@Component({
  selector: 'app-horizontal-list-classrooms',
  templateUrl: './horizontal-list-classrooms.component.html',
  styleUrls: ['./horizontal-list-classrooms.component.css']
})
export class HorizontalListClassroomsComponent implements OnInit {

  @Input() list: Classroom[];
  @Input() ListTitle: string;

  constructor() { }

  ngOnInit() {
  }

  deleteClassroom(p: Classroom) {
    let index = this.list.indexOf(p);
    this.list.splice(index, 1);
  }

}

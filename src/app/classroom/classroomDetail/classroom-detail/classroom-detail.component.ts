import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Classroom} from "../../../types/classroom.model";
import {ClassroomService} from "../../../services/classroom.service";
import {Pupil} from "../../../types/pupil.model";

@Component({
  selector: 'app-classroom-detail',
  templateUrl: './classroom-detail.component.html',
  styleUrls: ['./classroom-detail.component.css']
})
export class ClassroomDetailComponent implements OnInit {

  public classroom: Classroom;

  displayedColumns: String[] = ['firstName', 'surName'];
  dataSource: Pupil[]

  constructor(private route: ActivatedRoute, private classroomService: ClassroomService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.classroom = item['classroom']);
    this.dataSource = this.classroom.pupils
  }


}

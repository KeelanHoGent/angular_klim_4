import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../../types/classroom.model';
import {ClassroomService} from '../../../services/classroom.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent implements OnInit {

  public classrooms: Observable<Classroom[]>;

  constructor(
    private classroomService: ClassroomService
  ) {  }

  ngOnInit() {
    this.classrooms = this.classroomService.classes$;
  }
}

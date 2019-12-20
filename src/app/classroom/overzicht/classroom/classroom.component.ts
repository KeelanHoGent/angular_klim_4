import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductTemplate} from '../../../types/productTemplate.model';
import {TemplateService} from '../../../services/template.service';
import {Classroom} from '../../../types/classroom.model';
import {ClassroomService} from '../../../services/classroom.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  @Input() public classroom: Classroom;

  constructor(private classroomService: ClassroomService) { }

  ngOnInit() {
  }

  deleteClassroom(): boolean   {
    if (confirm('Bent u zeker dat u deze klaslijst wilt verwijderen?')) {
      this.classroomService.deleteClassroom(this.classroom).subscribe();
    }
    return true;
  }


}

import { Component, OnInit } from '@angular/core';
import {ProductTemplate} from "../../../types/productTemplate.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TemplateService} from "../../../services/template.service";
import {Classroom} from "../../../types/classroom.model";
import {ClassroomService} from "../../../services/classroom.service";

@Component({
  selector: 'app-classroom-detail',
  templateUrl: './classroom-detail.component.html',
  styleUrls: ['./classroom-detail.component.css']
})
export class ClassroomDetailComponent implements OnInit {

  public classroom: Classroom;
  public error = 'assets/images/error.svg';
  public correct = 'assets/images/correct.svg';



  constructor(private route: ActivatedRoute, private classroomService: ClassroomService, private router: Router) { }

  ngOnInit() {

    this.route.data.subscribe(item => this.classroom = item['classroom']);

  }


}

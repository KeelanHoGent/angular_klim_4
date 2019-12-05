import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClassroomService} from "../../../services/classroom.service";

@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.css']
})
export class ClassroomFormComponent implements OnInit {

  public error = 'assets/images/error.svg';
  public correct = 'assets/images/correct.svg';

  public classForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private classroomService: ClassroomService) { }

  ngOnInit() {
    this.classForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]]
      }
    )
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht';
    }
  }

  save() {

  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Project } from '../types/project.model';
import { ProjectService } from '../services/project.service';
import { AddProjectFormComponent } from '../add-project-form/add-project-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  constructor(private _router: Router) {}

  gotoForm() {
    this._router.navigate(['/add-project']);
  }
}

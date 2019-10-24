import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Project } from '../types/project.model';
import { ProjectService } from '../services/project.service';
import { AddProjectFormComponent } from '../add-project-form/add-project-form.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  constructor(
    public dialog: MatDialog ) {}

  
  openForm(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";

    dialogConfig.data = {
      id: 1,
      title: 'New project'
  };
    
    const dialogRef =  this.dialog.open(AddProjectFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );  
  }

  
}

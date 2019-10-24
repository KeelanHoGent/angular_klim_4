import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { Project } from '../types/project.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent  {
  public project: FormGroup;
  public title: string;

  constructor(
    private _fb: FormBuilder, 
    private _projectDataService: ProjectService,
    public dialogRef: MatDialogRef<AddProjectFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.title = data.title;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
    
  ngOnInit() {
    this.project = this._fb.group({
      projectName: [''],
      description: [''],
      projectCode: [''],
      image: [''],
      budget: [''],
      schoolYear: ['']
    })
    
  }

  onSubmit() {
    this.close();
    const newProject = new Project();
    newProject.name = this.project.value.projectName;
    newProject.descr = this.project.value.description;
    newProject.code = this.project.value.projectCode;
    newProject.image = this.project.value.image;
    newProject.budget = this.project.value.budget;
    newProject.schoolYear = this.project.value.schoolYear;

    this._projectDataService.addNewProject(newProject)
      .subscribe();
  }

  save() {
    this.dialogRef.close(this.project.value);
}

close() {
    this.dialogRef.close();
}


}


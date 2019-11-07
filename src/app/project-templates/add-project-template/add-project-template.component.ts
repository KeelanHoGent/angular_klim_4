import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectTemplate } from '../../types/project-template-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-project-template',
  templateUrl: './add-project-template.component.html',
  styleUrls: ['./add-project-template.component.css']
})
export class AddProjectTemplateComponent implements OnInit {

  public projectTemplate: FormGroup;
  public newProjectTemplate: ProjectTemplate;
  public isEdit: boolean;
  constructor(){}/*
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProjectTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.isEdit = data.soort;
  }*/

  ngOnInit() {/*
    this.projectTemplate = this._fb.group({
      name: [this.data.name ? this.data.name : '', Validators.required],
      image: [this.data.image ? this.data.image : '', Validators.required],
      description: [this.data.description ? this.data.description : '', Validators.required]
    });1*/
  }

}

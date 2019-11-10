import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectTemplate } from '../../types/project-template-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectTemplateService } from 'src/app/services/project-template.service';

export interface ApplicationDomain {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-project-template',
  templateUrl: './add-project-template.component.html',
  styleUrls: ['./add-project-template.component.css']
})

export class AddProjectTemplateComponent implements OnInit {

  public projectTemplate: FormGroup;
  public newProjectTemplate: ProjectTemplate;
  public isEdit: boolean;
  domeins: ApplicationDomain[] = [
    {value: 'Aarde', viewValue: 'Aarde'},
    {value: 'Plastiek', viewValue: 'Plastiek'},
    {value: 'MEtaal', viewValue: 'Metaal'}
  ];
  constructor(private _fb: FormBuilder, private _projecttemplateDataService: ProjectTemplateService){
    
  }/*
  constructor(
    ,
    public dialogRef: MatDialogRef<AddProjectTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.isEdit = data.soort;
  }*/

  ngOnInit() {

    this.projectTemplate = this._fb.group({
      name: ['', Validators.required],
      image: [ '', Validators.required],
      descr: [ '', Validators.required]
    });
  }
  onSubmit() {
    this._projecttemplateDataService.addNewProjecttemplate(new ProjectTemplate(
      this.projectTemplate.value.name,
      this.projectTemplate.value.descr,
      this.projectTemplate.value.image)
      );
  }

}

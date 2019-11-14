import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectTemplate } from '../../types/project-template-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectTemplateService } from 'src/app/services/project-template.service';
import { ApplicationDomain } from 'src/app/types/applicationDomain.model';



@Component({
  selector: 'app-add-project-template',
  templateUrl: './add-project-template.component.html',
  styleUrls: ['./add-project-template.component.css']
})

export class AddProjectTemplateComponent implements OnInit {

  public projecttemplate: FormGroup;
  public isEdit: boolean;
  domeins: ApplicationDomain[];
  constructor(private _fb: FormBuilder, private _projecttemplateDataService: ProjectTemplateService){
    
  }/*
  constructor(
    ,
    public dialogRef: MatDialogRef<AddProjectTemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.isEdit = data.soort;
  }*/

  ngOnInit() {

    this.projecttemplate = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      image: [ '', Validators.required],
      descr: [ '', [Validators.required, Validators.minLength(6)]]
    });
  }
  // TODO applicationid en addedbygo nog fixes
  onSubmit() {
    this._projecttemplateDataService.addNewProjecttemplate(new ProjectTemplate(
      this.projecttemplate.value.name,
      this.projecttemplate.value.descr,
      this.projecttemplate.value.image,
      true,
      1)
      );
  }
  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'is verplicht';
    } else if (errors.minlength) {
      return `moet minstens ${
        errors.minlength.requiredLength
      } karakters bevatten (heeft ${errors.minlength.actualLength})`;
    }
  }

}

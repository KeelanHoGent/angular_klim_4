import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectTemplate } from '../../types/project-template-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectTemplateService } from 'src/app/services/project-template.service';
import { ApplicationDomain } from 'src/app/types/applicationDomain.model';
import { ProjectService } from 'src/app/services/project.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-add-project-template',
  templateUrl: './add-project-template.component.html',
  styleUrls: ['./add-project-template.component.css']
})

export class AddProjectTemplateComponent implements OnInit {

  public projecttemplate: FormGroup;
  public isEdit: boolean;
  private _domainApps: Observable<ApplicationDomain[]>;
  domains: ApplicationDomain[];
  constructor(private _fb: FormBuilder,
              private _projecttemplateDataService: ProjectTemplateService,
              private _projectDataService: ProjectService){
    this._domainApps = this._projectDataService.getApplicationDomains$();
  }

  ngOnInit() {
    this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);
    this.projecttemplate = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      image: [ '', Validators.required],
      descr: [ '', [Validators.required, Validators.minLength(6)]],
      applicationDomain: ['', Validators.required]
    });
  }
  // TODO applicationid en addedbygo nog fixes
  onSubmit() {
    this._projecttemplateDataService.addNewProjecttemplate(new ProjectTemplate(
      this.projecttemplate.value.name,
      this.projecttemplate.value.descr,
      this.projecttemplate.value.image,
      true,
      this.projecttemplate.value.applicationDomain)
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

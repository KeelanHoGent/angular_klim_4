import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectTemplate } from '../../types/project-template-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectTemplateService } from 'src/app/services/project-template.service';
import { ApplicationDomain } from 'src/app/types/applicationDomain.model';
import { ProjectService } from 'src/app/services/project.service';
import { Observable } from 'rxjs';
import { ProductTemplate } from 'src/app/types/product-template-model';



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
  productTemplates: ProductTemplate[];
  geselecteerdeProductTemplates: ProductTemplate[];
  constructor(private _fb: FormBuilder,
              private _projecttemplateDataService: ProjectTemplateService,
              private _projectDataService: ProjectService) {
    this._domainApps = this._projectDataService.getApplicationDomains$();

  }

  ngOnInit() {
    this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);
    this._projecttemplateDataService.getProductTemplates$().subscribe(pt => this.productTemplates = pt);

    this.projecttemplate = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      image: [ '', Validators.required],
      descr: [ '', [Validators.required, Validators.minLength(6)]],
      applicationDomain: ['', Validators.required],
      productTemplates: ['', Validators.required]
    });
    this.projecttemplate.get('productTemplates').valueChanges.subscribe(pt => this.geselecteerdeProductTemplates = pt);
  }
  // TODO applicationid en addedbygo nog fixes
  onSubmit() {
    const p = new ProjectTemplate();
    p.name = this.projecttemplate.value.name;
    p.descr = this.projecttemplate.value.descr;
    p.image = this.projecttemplate.value.image;
    this.productTemplates.map(v => p.productTemplates.push(v)) ;
    p.applicationDomainId = this.projecttemplate.value.applicationDomain;
    this._projecttemplateDataService.addNewProjecttemplate(p);
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

import { Component, OnInit, Inject, Optional, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectTemplate } from '../../types/project-template-model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectTemplateService } from 'src/app/services/project-template.service';
import { ApplicationDomain } from 'src/app/types/applicationDomain.model';
import { ProjectService } from 'src/app/services/project.service';
import { Observable } from 'rxjs';
import { ProductTemplate } from 'src/app/types/product-template-model';
import { delay } from 'q';



@Component({
  selector: 'app-add-project-template',
  templateUrl: './add-project-template.component.html',
  styleUrls: ['./add-project-template.component.css']
})

export class AddProjectTemplateComponent implements OnInit {

  public projecttemplate: FormGroup;
  public domains: ApplicationDomain[] = [];
  public productTemplates: ProductTemplate[];
  public geselecteerdeProductTemplates: ProductTemplate[];
  constructor(private _fb: FormBuilder,
    private _projecttemplateDataService: ProjectTemplateService,
    private _projectDataService: ProjectService) {


  }

  ngOnInit() {
    this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);
    this._projecttemplateDataService.getProductTemplates$().subscribe(pt => this.productTemplates = pt);

    this.setForm();
    this.projecttemplate.get('productTemplates').valueChanges.subscribe(pt => this.geselecteerdeProductTemplates = pt);
  }
  onSubmit() {
    const p = new ProjectTemplate();
    p.name = this.projecttemplate.value.name;
    p.descr = this.projecttemplate.value.descr;
    p.image = this.projecttemplate.value.image;
    this.productTemplates.map(v => p.productTemplates.push(v));
    p.applicationDomainId = this.projecttemplate.value.applicationDomain;
    p.budget = this.projecttemplate.value.budget;
    p.maxScore = this.projecttemplate.value.maxScore;
    this._projecttemplateDataService.addNewProjecttemplate(p);

  }
  setForm() {
    this.projecttemplate = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      image: ['', Validators.required],
      descr: ['', [Validators.required, Validators.minLength(6)]],
      applicationDomain: [this.domains, Validators.required],
      productTemplates: [this.productTemplates, Validators.required],
      budget: [0, Validators.required],
      maxScore: [0, Validators.required]
    });

  }
  compareFn(product: ProductTemplate, product2: ProductTemplate) {
    return product && product2 ? product.productTemplateId === product2.productTemplateId : product === product2;
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

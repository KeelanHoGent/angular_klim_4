import { Component, OnInit, Inject, Optional, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProjectTemplate } from '../../types/projectTemplate.model';
import { ApplicationDomain } from 'src/app/types/applicationDomain.model';
import { ProjectService } from 'src/app/services/project.service';
import { ProductTemplate } from 'src/app/types/productTemplate.model';
import {TemplateService} from '../../services/template.service';
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-edit-project-template',
  templateUrl: './edit-project-template.component.html',
  styleUrls: ['./edit-project-template.component.css']
})

export class EditProjectTemplateComponent implements OnInit {
  public template: ProjectTemplate;
  public projecttemplate: FormGroup;
  public domains: ApplicationDomain[];
  public productTemplatesLijst: ProductTemplate[];
  public geselecteerdeProductTemplates: ProductTemplate[];
  public geselecteerdeDomainApplication: ApplicationDomain;

  public productTemps: FormControl = new FormControl();

  public error: String = "assets/images/error.svg";
  public correct: String = "assets/images/correct.svg";

  public productFotoSrc = '';

  constructor(private router: Router,
              private _fb: FormBuilder,
              private _projecttemplateDataService: TemplateService,
              private projectService: ProjectService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.template = item.projectTemp);
    this.geselecteerdeProductTemplates = this.template.productTemplates;

    this.setForm();

    this.projectService.getApplicationDomains$().subscribe(ad => {
      this.domains = ad;
      this.geselecteerdeDomainApplication = this.domains.find(d => d.id === this.template.applicationDomainId);
      this._projecttemplateDataService.getProductTemplates$().subscribe(pt => {
        this.productTemplatesLijst = pt;


        this.projecttemplate.get('applicationDomain').setValue(this.geselecteerdeDomainApplication);

        this.productTemps.setValue(this.geselecteerdeProductTemplates.map(p => p.productTemplateId));

        this.productTemps.valueChanges.subscribe(t => {
          this.geselecteerdeProductTemplates = t.map(p => this.productTemplatesLijst.find(x => x.productTemplateId == p))
        });
      });
    });
  }

  setForm() {
    this.projecttemplate = this._fb.group({
      name: [this.template.name, [Validators.required, Validators.minLength(6)]],
      image: [this.template.image, Validators.required],
      description: [ this.template.descr, [Validators.required, Validators.minLength(6)]],
      applicationDomain: [ , Validators.required],
      //productTemplates: [this.geselecteerdeProductTemplates.map(p => p.productTemplateId), Validators.required],
      budget: [this.template.budget, Validators.required],
      maxScore: [this.template.maxScore, Validators.required]
      });
  }

  save() {
    this.template.name = this.projecttemplate.value.name;
    this.template.descr = this.projecttemplate.value.description;
    this.template.image = this.projecttemplate.value.image;
    this.template.productTemplates.length = 0;
    this.geselecteerdeProductTemplates.map(v => this.template.productTemplates.push(v)) ;
    this.template.applicationDomainId = this.projecttemplate.value.applicationDomain.id;
    this.template.budget = this.projecttemplate.value.budget;
    this.template.maxScore = this.projecttemplate.value.maxScore;
    console.log(this.template.toJson());

    this._projecttemplateDataService.updateProjectTemplate(this.template.projectTemplateId, this.template)
      .subscribe(res => {
        console.log(res);
      this.router.navigateByUrl("/projecttemplates");
    });
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

  showDefaultImage() {
    this.productFotoSrc = 'assets/images/image-not-found.png';
  }

}

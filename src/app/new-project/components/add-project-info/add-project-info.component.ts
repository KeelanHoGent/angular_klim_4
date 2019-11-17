import { Component, OnInit } from '@angular/core';
import { Project } from '../../../types/project.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { Observable } from 'rxjs';
import { ApplicationDomain } from '../../../types/applicationDomain.model';
import { Product } from '../../../types/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Group } from 'src/app/types/group.model';
import { switchMap } from 'rxjs/operators';
import { EvaluationCriterea } from 'src/app/types/evaluationCriterea.model';

@Component({
  selector: 'app-add-project-info',
  templateUrl: './add-project-info.component.html',
  styleUrls: ['./add-project-info.component.css']
})

export class AddProjectInfoComponent implements OnInit {
  public projectFg: FormGroup;
  private _domainApps: Observable<ApplicationDomain[]>;
  public domains: ApplicationDomain[];
  public products: Product[];
  public groups: Group[];
  public newProject: Project;
  public isEdit: boolean;
  public evaluationCs : EvaluationCriterea[];
  


  public error: String = "../../../../assets/images/error.svg";
  public correct: String = "../../../../assets/images/correct.svg";

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _projectDataService: ProjectService,
    private _route: ActivatedRoute) {

    this.newProject = new Project();
    this.products = this.newProject.products;
    this.groups = this.newProject.groups;

    this._domainApps = this._projectDataService.getApplicationDomains$();
  }

  ngOnInit() {
    this.isEdit = false;
    this.initFormGroup(false);

    //  Keuze tussen edit project en new project 
    let editPromise = this.initEditPage();
    editPromise.then(edit => this.initFormGroup(edit));

    this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);
  }


  // Wanneer de url een id als parameter heeft, wordt de velden ingevuld om een project te editen 
  private initEditPage() {
    return new Promise(
      (resolve) => {
        if (this._route.snapshot.params['id']) {
          this.isEdit = true;
          this._route.paramMap.pipe(switchMap((params: ParamMap) => this._projectDataService.getProjectById$(+params.get('id')))).subscribe((p: Project) => {
            this.newProject = p;
            this.groups = p.groups;
            this.products = p.products;
            console.log(this.newProject)
            resolve(true);    // een edit pagina 
          });
        } else {
          resolve(false);   // een nieuw project pagina 
        }
      }
    )
  }

  // Op basis van het soort pagina, wordt de formgroup geinitializeerd  
  private initFormGroup(isEdit) {
    this.projectFg = this._fb.group({
      name: [isEdit ? this.newProject.name : '', Validators.required],
      description: [isEdit ? this.newProject.descr : '', Validators.required],
      image: [isEdit ? this.newProject.image : '', Validators.required],
      budget: [isEdit ? this.newProject.budget : '', Validators.required],
      schoolYear: [isEdit ? this.newProject.schoolYear : '', Validators.required],
      applicationDomain: [isEdit ? this.newProject.applicationDomain : '', Validators.required]
    });
    if (isEdit) {
      this.projectFg.controls['applicationDomain'].setValue(this.newProject.applicationDomain) //werkt nog niet 
    }
  }


  // Opslaan van een nieuwe project of een project updaten 
  submitProject() {
    if (!this.isEdit) {
      this.newProject.name = this.projectFg.value.name;
      this.newProject.descr = this.projectFg.value.description;
      this.newProject.image = this.projectFg.value.image;
      this.newProject.schoolYear = this.projectFg.value.schoolYear;
      this.newProject.applicationDomainId = this.projectFg.value.applicationDomain;

      this._projectDataService.addNewProject(this.newProject)
        .subscribe(res => {
          this.router.navigateByUrl("/projecten");
        });
    } else {
      this._projectDataService.updateProject(this.newProject.id, this.newProject)
        .subscribe(res => {
          this.router.navigateByUrl("/projecten");
        });
    }
  }

  addNewProductToProject(product: Product) {
    product.categoryId = 1;                           //TIJDELIJK!!!!

    this.newProject.addProductToProject(product);
    this.products = this.newProject.products;
  }

  deleteProduct(p: Product): void {
    this.newProject.removeProduct(p);
    this.products = this.newProject.products;
  }

  addNewGroupToProject(group: Group) {
    this.newProject.addGroupToProject(group);
    this.groups = this.newProject.groups;
  }

  deleteGroup(g: Group): void {
    this.newProject.removeGroup(g);
    this.groups = this.newProject.groups;
  }

  addNewEvaluationCToProject(g: EvaluationCriterea) {
    this.evaluationCs.push(g);
    this.newProject.addEvaluationCToProject(g);
  }

  deleteEvaluationC(g: EvaluationCriterea): void {
    let index = this.evaluationCs.indexOf(g);
    this.evaluationCs.splice(index, 1);
    this.newProject.removeEvaluationC(g);
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht.';
    }
  }
}

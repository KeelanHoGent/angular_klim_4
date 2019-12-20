import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../../../types/project.model';
import { Validators, FormBuilder, FormGroup, Form } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { Observable } from 'rxjs';
import { ApplicationDomain } from '../../../types/applicationDomain.model';
import { Product } from '../../../types/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Group } from 'src/app/types/group.model';
import { switchMap } from 'rxjs/operators';
import { EvaluationCriterea } from 'src/app/types/evaluationCriterea.model';
import { ProjectTemplate } from 'src/app/types/projectTemplate.model';
import { TemplateService } from 'src/app/services/template.service';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/types/classroom.model';

@Component({
  selector: 'app-add-project-info',
  templateUrl: './add-project-info.component.html',
  styleUrls: ['./add-project-info.component.css']
})

export class AddProjectInfoComponent implements OnInit {
  public projectFg: FormGroup;
  public templateFg: FormGroup;
  private _domainApps: Observable<ApplicationDomain[]>;
  public domains: ApplicationDomain[];
  public products: Product[];
  public groups: Group[];
  public newProject: Project;
  public isEdit: boolean;
  public evaluationCs: EvaluationCriterea[];
  public templates: ProjectTemplate[];
  public template: ProjectTemplate;
  public chosenClassroom: Classroom;
  public classes: Classroom[];

  public error: 'assets/images/error.svg';
  public correct: 'assets/images/correct.svg';

  public klasIngevuld: boolean;

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _projectDataService: ProjectService,
    private _route: ActivatedRoute,
    private _templateService: TemplateService,
    private _classRoomService: ClassroomService
  ) {

    this.newProject = new Project();
    this.products = this.newProject.products;
    this.groups = this.newProject.groups;
    this.evaluationCs = this.newProject.evaluationCritereas;
    this.klasIngevuld = false;
    this._domainApps = this._projectDataService.getApplicationDomains$();
  }

  ngOnInit() {
    this._route.data.subscribe(item => this.template = item.projectTemp);
    this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);
    this._templateService.getProjectTemplates$().subscribe(t => this.templates = t);
    this._classRoomService.getClassrooms$().subscribe(cr => this.classes = cr);

    this.isEdit = false;

    this.initFormGroup(false, 0);

    const editPromise = this.initEditPage();
    let index: number;

    editPromise.then(edit => {
      if (!edit) { index = 0; } else { index = this.newProject.applicationDomain.id - 1; }
      this.initFormGroup(edit, index);
      this.putClassroom(this.chosenClassroom)
    });

    

  }




  // Wanneer de url een id als parameter heeft, wordt de velden ingevuld om een project te editen
  private initEditPage() {
    return new Promise(
      (resolve) => {
        if (!this.template && this._route.snapshot.params.id) {
          
          this.isEdit = true;
          this._route.paramMap.pipe(
            switchMap((params: ParamMap) =>
              this._projectDataService.getProjectById$(+params.get('id'))
            )
          ).subscribe((p: Project) => {
            this.newProject = p;

            // Frontend lijsten initializeren
            this.groups = p.groups;
            this.products = p.products;
            this.evaluationCs = p.evaluationCritereas;
            resolve(true);    // een edit pagina
          });
        } else {
          resolve(false);   // een nieuw project pagina
        }
      }
    );
  }

  // Op basis van het soort pagina, wordt de formgroup geinitializeerd
  private initFormGroup(isEdit, appDomain: number) {

    this.templateFg = this._fb.group({
      template: [''],
    });

    this.projectFg = this._fb.group({
      classroom: [isEdit? this.chosenClassroom : "", Validators.required],
      name: [isEdit ? this.newProject.name : '', Validators.required],
      description: [isEdit ? this.newProject.descr : '', Validators.required],
      image: [isEdit ? this.newProject.image : '', Validators.required],
      budget: [isEdit ? this.newProject.budget : '', Validators.required],
      schoolYear: [isEdit ? this.newProject.schoolYear : '', Validators.required],
      applicationDomain: [isEdit ? this.domains[appDomain] : '', Validators.required]
    });

    if (!isEdit) {
      this.newProject.products = [];
      this.products = [];
    }

    this.putClassroom(this.chosenClassroom)
  }


  // Opslaan van een nieuwe project of een project updaten
  submitProject() {
    if (this.projectFg.value.applicationDomain.id) {
      this.newProject.name = this.projectFg.value.name;
      this.newProject.descr = this.projectFg.value.description;
      this.newProject.image = this.projectFg.value.image;
      this.newProject.schoolYear = this.projectFg.value.schoolYear;
      this.newProject.budget = this.projectFg.value.budget;
      this.newProject.applicationDomainId = this.projectFg.value.applicationDomain.id;

      if (!this.isEdit) {
        this._projectDataService.addNewProject(this.newProject)
          .subscribe(res => {
            this.router.navigateByUrl('/projecten');
          });
      } else {
        this._projectDataService.updateProject(this.newProject.id, this.newProject)
          .subscribe(res => {
            this.router.navigateByUrl('/projecten');
          });
      }
    } 
  }

  // wordt aangeroepen bij change van template in frontend
  addTemplate() {
    // bij change naar een bepaald template uit de selectbox
    if (this.template) {
      this.initFormGroupWithTemplate();
    } else {
      this.initFormGroup(false, 0);
    }

  }

  // initializeren van formgroup met een template
  initFormGroupWithTemplate() {
    const date = new Date();
    this._projectDataService.getApplicationDomains$().subscribe(ad => {
      this.domains = ad;
      const index = this.template.applicationDomainId - 1;

      this._templateService.getProjectTemplates$().subscribe(t => {
        this.templates = t;
        this.templateFg = this._fb.group({
          template: [this.templates[this.template.projectTemplateId - 1]]
        });
      });

      

      this.projectFg = this._fb.group({
        classroom: [this.chosenClassroom, Validators.required],
        name: [this.template.name, Validators.required],
        description: [this.template.descr, Validators.required],
        image: [this.template.image, Validators.required],
        budget: [this.template.budget, Validators.required],
        schoolYear: [date.getFullYear(), Validators.required],
        applicationDomain: [this.domains[index]]
      });

      this.putClassroom(this.chosenClassroom)

      this.template.productTemplates.forEach(pr => {
        const product = new Product();
        product.name = pr.productName;
        product.categoryId = pr.categoryId;
        product.description = pr.description;
        product.image = pr.image;

        this.addNewProductToProject(product);
      });
    });

    console.log(this.chosenClassroom)


  }

  addNewProductToProject(product: Product) {
    product.categoryId = 1;                           // TIJDELIJK!!!!
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
    this.newProject.addEvaluationCToProject(g);
    this.evaluationCs = this.newProject.evaluationCritereas;
  }

  deleteEvaluationC(g: EvaluationCriterea): void {
    this.newProject.removeEvaluationC(g);
    this.evaluationCs = this.newProject.evaluationCritereas;
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht.';
    }
  }

  putClassroom(classroom: Classroom){
    console.log(classroom)
    this.chosenClassroom = classroom;
    if(classroom){
    this.klasIngevuld = true;
    } else {
      this.klasIngevuld = false;
    }
  }
}

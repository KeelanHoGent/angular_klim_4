import { Component, OnInit, Output } from '@angular/core';
import { Project } from '../../../types/project.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { Observable } from 'rxjs';
import { ApplicationDomain } from '../../../types/applicationDomain.model';
import { Product } from '../../../types/product.model';
import { Router } from '@angular/router';
import { Group } from 'src/app/types/group.model';
import { EvaluationCriterea } from 'src/app/types/evaluationCriterea.model';

@Component({
  selector: 'app-add-project-info',
  templateUrl: './add-project-info.component.html',
  styleUrls: ['./add-project-info.component.css']
})
export class AddProjectInfoComponent implements OnInit {
  public project: FormGroup;
  private _domainApps: Observable<ApplicationDomain[]>;
  public domains: ApplicationDomain[];
  public products: Product[];
  public groups: Group[];
  public evaluationCs : EvaluationCriterea[];
  
  private newProject: Project;


  public error: String = "../../../../assets/images/error.svg";
  public correct: String = "../../../../assets/images/correct.svg";

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _projectDataService: ProjectService) {

    this.products = new Array<Product>();
    this.groups = new Array<Group>();
    this.evaluationCs = new Array<EvaluationCriterea>();

    //volgende is gewoon voor iets te zien bij stylen
    const p1 = new Product();
    const p2 = new Product();
    p1.name = "Hout";
    p1.description = "Heel millieuvriendelijk";
    p1.price = 2;
    p2.name = "Plastiek";
    p2.description = "slecht voor het millieu";
    p2.price = 6;
    this.products.push(p1);
    this.products.push(p2);
    // 

    this.newProject = new Project();
    this._domainApps = this._projectDataService.getApplicationDomains$();

  }

  ngOnInit() {
    this.project = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      budget: ['', Validators.required],
      schoolYear: ['', Validators.required],
      applicationDomain: ['', Validators.required]
    })

    this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);

  }

  // onSubmit() {
  //   this.newProject.name = this.project.value.name;
  //   this.newProject.descr = this.project.value.description;
  //   this.newProject.image = this.project.value.image;
  //   this.newProject.budget = this.project.value.budget;
  //   this.newProject.schoolYear = this.project.value.schoolYear;
  //   this.newProject.applicationDomainId = this.project.value.applicationDomain;

  //   console.log(this.newProject);

  //   this._projectDataService.addNewProject(this.newProject)
  //     .subscribe();
  // }

  save(){
    this.newProject.name = this.project.value.name;
    this.newProject.descr = this.project.value.description;
    this.newProject.image = this.project.value.image;
    this.newProject.schoolYear = this.project.value.schoolYear;
    this.newProject.applicationDomainId = this.project.value.applicationDomain;

    this._projectDataService.addNewProject(this.newProject)
      .subscribe(res => {
        this.router.navigateByUrl("/projecten");

      });

   
      
  }


  get applicationDomain() {
    return this.project.get('applicationDomain');
  }

  addNewProductToProject(product: Product) {
    product.categoryId = 1;                           //TIJDELIJK!!!!

    // product.projectId = this.newProject.id;
    this.products.push(product);
    this.newProject.addProductToProject(product);
  }

  deleteProduct(p: Product): void {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
    this.newProject.removeProduct(p);
  }

  addNewGroupToProject(group: Group) {
    this.groups.push(group);
    this.newProject.addGroupToProject(group);
  }

  deleteGroup(g: Group): void {
    
    let index = this.groups.indexOf(g);
    this.groups.splice(index, 1);
    this.newProject.removeGroup(g);
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

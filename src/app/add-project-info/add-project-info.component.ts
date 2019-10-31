import { Component, OnInit, Output } from '@angular/core';
import { Project } from '../types/project.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { Observable } from 'rxjs';
import { ApplicationDomain } from '../types/applicationDomain.model';
import { Product } from '../types/product.model';

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
  private newProject: Project;

  constructor(
    private _fb: FormBuilder,
    private _projectDataService: ProjectService) {

    this.products = new Array<Product>();

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
      projectName: ['', [Validators.required]],
      description: ['', Validators.required],
      projectCode: ['', Validators.required],
      image: ['', Validators.required],
      budget: ['', Validators.required],
      schoolYear: ['', Validators.required],
      applicationDomain: ['', Validators.required]
    })

    this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);

  }

  onSubmit() {
    this.newProject.name = this.project.value.projectName;
    this.newProject.descr = this.project.value.description;
    this.newProject.code = this.project.value.projectCode;
    this.newProject.image = this.project.value.image;
    this.newProject.budget = this.project.value.budget;
    this.newProject.schoolYear = this.project.value.schoolYear;
    this.newProject.applicationDomainId = this.project.value.applicationDomain;

    this._projectDataService.addNewProject(this.newProject)
      .subscribe();
  }


  get applicationDomain() {
    return this.project.get('applicationDomain');
  }

  addNewProductToProject(product: Product) {
    this.products.push(product);
    this.newProject.addProductToProject(product);
  }

  deleteProduct(p: Product): void {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
    this.newProject.removeProduct(p);

  }
}

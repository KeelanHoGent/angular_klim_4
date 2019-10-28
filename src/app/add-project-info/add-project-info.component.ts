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

  constructor(
    private _fb: FormBuilder,
    private _projectDataService: ProjectService) {

      this.products = new Array<Product>();

      //volgende is gewoon voor iets te zien bij stylen
      const p1 = new Product();
      const p2 = new Product();
      p1.name = "Hout";
      p2.name = "Glas";
      this.products.push(p1);
      this.products.push(p2);
      //

      this._domainApps = this._projectDataService.getApplicationDomains$();
      
  }

  ngOnInit() {
    this.project = this._fb.group({
      projectName: ['', [Validators.required]],
      description: [''],
      projectCode: [''],
      image: [''],
      budget: [''],
      schoolYear: [''],
      applicationDomain: ['']
    })

    this._projectDataService.getApplicationDomains$().subscribe(ad => this.domains = ad);

  }

  onSubmit() {
    const newProject = new Project();
    newProject.name = this.project.value.projectName;
    newProject.descr = this.project.value.description;
    newProject.code = this.project.value.projectCode;
    newProject.image = this.project.value.image;
    newProject.budget = this.project.value.budget;
    newProject.schoolYear = this.project.value.schoolYear;
    newProject.applicationDomainId = this.project.value.applicationDomain;

    this._projectDataService.addNewProject(newProject)
      .subscribe();
  }


  get applicationDomain() {
    return this.project.get('applicationDomain');
  }

  addNewProduct(product: Product) {
    console.log(product);
    this.products.push(product);
  }
}

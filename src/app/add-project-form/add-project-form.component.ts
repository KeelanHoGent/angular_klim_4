import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { Project } from '../types/project.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { ApplicationDomain } from '../types/applicationDomain.model';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent implements OnInit {
  public project: FormGroup;
  private _domainApps: Observable<ApplicationDomain[]>;
  public domains: ApplicationDomain[];

  constructor(
    private _fb: FormBuilder, 
    private _projectDataService: ProjectService){

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

  changeDomain(event) {
    this.applicationDomain.setValue(event.target.value, {
      onlySelf: true
    })
  }

  get applicationDomain() {
    return this.project.get('applicationDomain');
  }
}


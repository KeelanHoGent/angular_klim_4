import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from 'src/app/types/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'src/app/types/product.model';
import { Group } from 'src/app/types/group.model';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {
  
  public project$: Observable<Project>;
  public project: Project;
  public products: Product[];
  public groups: Group[];

  constructor(
    private _route: ActivatedRoute,
    private _service: ProjectService
     ) {
  }

  ngOnInit() {
      this._route.paramMap.pipe(
        switchMap((params: ParamMap) => 
            this._service.getProjectById$(+params.get('id')))).subscribe((p: Project) => 
            {
              this.project = p;
              this.products = p.products;
              this.groups = p.groups;
            })


      
  }

  



}

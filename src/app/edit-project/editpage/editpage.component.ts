import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from 'src/app/types/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {
  
  public project$: Observable<Project>;
  public project: Project;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: ProjectService
     ) {
  }

  ngOnInit() {
      this.project$ = this._route.paramMap.pipe(
        switchMap((params: ParamMap) => 
          this._service.getProjectById$(+params.get('id'))))

          
      // this.project$.subscribe(p => this.project = p);
  }

  



}

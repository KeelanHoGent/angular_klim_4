import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductTemplate} from '../types/productTemplate.model';
import {TemplateService} from '../services/template.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProjectTemplate} from "../types/projectTemplate.model";

@Injectable({
  providedIn: 'root'
})

export class ProjectTemplateResolver implements Resolve<ProjectTemplate> {
  constructor(private templateService: TemplateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectTemplate> {
    return this.templateService.getProjectTemplate$(route.params['id']); 
  }
}

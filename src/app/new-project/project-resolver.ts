import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Project } from '../types/project.model';
import { ProjectService } from '../services/project.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolverService implements Resolve<Project> {
  constructor(private projectServide: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
    return this.projectServide.getProjectById$(route.params['id']); 
  }
}

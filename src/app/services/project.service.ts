import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Project } from '../types/project.model';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApplicationDomain } from '../types/applicationDomain.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public loadingError$ = new Subject<string>();
  constructor(private http: HttpClient) { }

  // Example to use the environment apiUrl
  get projects$(): Observable<Project[]> {
    return this.http.get(`${environment.apiUrl}/Classroom/withProjects/1/`).pipe( //HARDCODED 
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map(
        (list: any[]): Project[] => list.map(Project.fromJSON)
      )
    );
  }

  getApplicationDomains$(): Observable<ApplicationDomain[]> {
    return this.http.get(`${environment.apiUrl}/ApplicationDomain`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map(
        (list: any[]): ApplicationDomain[] => list.map(ApplicationDomain.fromJSON)
      )
    );
  }
  

  addNewProject(project: Project) {
    return this.http.post(`${environment.apiUrl}/ClassRoom/addProject/1`,
    project.toJson());
  }



  


}

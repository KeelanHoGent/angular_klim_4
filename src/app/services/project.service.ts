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
  private _classroomId: number;

  constructor(private http: HttpClient) {
    //Dit is om makkelijk te kunnen testen met de data die in de database zit als mockdata
    //later kan dit veranderd worden naar de classroomId van de ingelogde gebruiker
    this._classroomId = 1;
  }

  // Example to use the environment apiUrl
  //get projects$(): Observable<Project[]> {
  //  return this.http.get(`${environment.apiUrl}/Classroom/withProjects/1/`).pipe( //HARDCODED
  //    catchError(error => {
  //      this.loadingError$.next(error.statusText);
  //      return of(null);
  //    }),
  //    map(
  //      (list: any[]): Project[] => list.map(Project.fromJSON)
  //    )
  //  );
  //}

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


  addNewProject(project: Project) : Observable<Project> {
    return this.http.post(`${environment.apiUrl}/ClassRoom/addProject/1`,
    project.toJson()).pipe(map(Project.fromJSON));
  }


  getProjects$(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiUrl}/ClassRoom/projects/${this._classroomId}`).pipe(
      map(x => x.map(p => Project.fromJSON(p)))
    );
  }

  getProjectById$(id: number){
    return this.http.get<Project>(`${environment.apiUrl}/Project/${id}/`).pipe(
      map(x => Project.fromJSON(x))
    )
  }

  updateProject(id: number, project: Project): Observable<Project>{
    console.log(project);
    return this.http.put<Project>(`${environment.apiUrl}/Project/${id}/`,
    project.toJson()).pipe(map(Project.fromJSON));
  }


}

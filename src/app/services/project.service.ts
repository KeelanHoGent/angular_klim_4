import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Project } from "../types/project.model";
import { map } from "rxjs/operators";
import {Classroom} from "../types/classroom.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _classroomId: number;

  constructor(private http: HttpClient) {
    //Dit is om makkelijk te kunnen testen met de data die in de database zit als mockdata
    //later kan dit veranderd worden naar de classroomId van de ingelogde gebruiker
    this._classroomId = 1;
  }

  // Example to use the environment apiUrl
  get test$(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/ApplicationDomain`);
  }

  get projects$(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiUrl}/ClassRoom/withProjects/${this._classroomId}`).pipe(
      map(x => Classroom.fromJSON(x).projects)
    );
  }

}

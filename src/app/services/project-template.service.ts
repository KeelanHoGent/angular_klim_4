import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Project} from '../types/project.model';
import {map, filter} from 'rxjs/operators';
import { ProjectTemplate } from '../types/project-template-model';
@Injectable({
  providedIn: 'root'
})
export class ProjectTemplateService {
  private _templateId: number;
  constructor(private http: HttpClient) {
    // Dit is om makkelijk te kunnen testen met de data die in de database zit als mockdata
    // later kan dit veranderd worden naar de classroomId van de ingelogde gebruiker
    this._templateId = 1;

  }
  getProjectTemplate$(id: number) {
    return this.http.get<ProjectTemplate>(`${environment.apiUrl}/ProjectTemplate/${this._templateId}`).pipe(
      map(x => ProjectTemplate.fromJSON(x))
    );
  }
  getProjectTemplates$(): Observable<ProjectTemplate[]> {
    return this.http.get<ProjectTemplate[]>(`${environment.apiUrl}/ProjectTemplate/projecttemplates/${this._templateId}`).pipe(
      map(x => x.map(p => ProjectTemplate.fromJSON(p)))
    );
  }
  addNewProjecttemplate(projecttemplate: ProjectTemplate) {
    throw new Error("Method not implemented.");
  }
}

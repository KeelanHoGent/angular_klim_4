import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Project} from '../types/project.model';
import {map, filter} from 'rxjs/operators';
import { ProjectTemplate } from '../types/project-template-model';
import { ProductTemplate } from '../types/product-template-model';
@Injectable({
  providedIn: 'root'
})
export class ProjectTemplateService {
  updateProjectTemplate(id: number, template: ProjectTemplate): Observable<ProjectTemplate> {
    return this.http.put<ProjectTemplate>(`${environment.apiUrl}/ProjectTemplate/${id}/`,
    template.toJson()).pipe(map(ProjectTemplate.fromJSON));
  }
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
  addNewProjecttemplate(projecttemplate: ProjectTemplate): Observable<Project> {
    return this.http.post(`${environment.apiUrl}/ClassRoom/addProjectTemplate/1`,
    projecttemplate.toJson()).pipe(map(Project.fromJSON));
  }


  getProjectTemplates$(): Observable<ProjectTemplate[]> {
    return this.http.get<ProjectTemplate[]>(`${environment.apiUrl}/ProjectTemplate/projecttemplates/${this._templateId}`).pipe(
      map((list: any[]): ProjectTemplate[] => list.map(ProjectTemplate.fromJSON))
    );
  }
  getProductTemplates$(): Observable<ProductTemplate[]> {
    return this.http.get<ProductTemplate[]>(`${environment.apiUrl}/School/productTemplates/${this._templateId}`)
    .pipe(
      map((list: any[]): ProductTemplate[] => list.map(ProductTemplate.fromJSON))
    );
  }
}

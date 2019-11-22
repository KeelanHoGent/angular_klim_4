import { Injectable } from '@angular/core';
import { ProductTemplate } from '../types/productTemplate.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CategoryTemplate } from '../types/categoryTemplate.model';
import { Observable } from 'rxjs';
import {ProjectTemplate} from '../types/project-template-model';
import {Project} from '../types/project.model';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  public schoolId = 1;
  private _templateId: number;

  constructor(private http: HttpClient) {
    // Dit is om makkelijk te kunnen testen met de data die in de database zit als mockdata
    // later kan dit veranderd worden naar de classroomId van de ingelogde gebruiker
    this._templateId = 1;
  }

  // project templates
  updateProjectTemplate(id: number, template: ProjectTemplate): Observable<ProjectTemplate> {
    return this.http.put<ProjectTemplate>(`${environment.apiUrl}/ProjectTemplate/${id}/`,
      template.toJson()).pipe(map(ProjectTemplate.fromJSON));
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

  // product templates
  getProductTemplates$(): Observable<ProductTemplate[]> {
    return this.http.get<ProductTemplate[]>(`${environment.apiUrl}/School/productTemplates/${this._templateId}`)
      .pipe(
        map((list: any[]): ProductTemplate[] => list.map(ProductTemplate.fromJSON))
      );
  }

  addProductTemplate(productTemplate: ProductTemplate) {
    return this.http.post(`${environment.apiUrl}/School/addProductTemplate/1`, productTemplate.toJson());
  }

  getCategoryTemplates$(): Observable<CategoryTemplate[]>{
    let test = this.http.get<CategoryTemplate[]>(`${environment.apiUrl}/ProductTemplate/GetCategories`)
    .pipe(map(x => x.map(c => CategoryTemplate.fromJSON(c)))
    );
    return test;
  }

}

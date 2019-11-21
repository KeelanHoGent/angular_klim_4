import { Injectable } from '@angular/core';
import { ProductTemplate } from '../types/productTemplate.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CategoryTemplate } from '../types/categoryTemplate.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  public schoolId = 1;
  constructor(private http: HttpClient) { 
    
  }

  getProductTemplates$() {
    // return this.http.get<ProductTemplate>(`${environment.apiUrl}/ProductTemplate/getAllProductTemplatesForSchool`)
    // .pipe(map(pt => ProductTemplate.fromJSON(pt)))
  }

  addProductTemplate(productTemplate: ProductTemplate) {
    return this.http.post(`${environment.apiUrl}/School/addProductTemplate/1`, productTemplate.toJson());
  }

  get CategoryTemplates$(): Observable<CategoryTemplate[]>{
    return this.http.get<CategoryTemplate[]>(`${environment.apiUrl}/ProductTemplate/GetCategories`)
    .pipe(map(x => x.map(c => CategoryTemplate.fromJSON(c)))
    );
  }

}

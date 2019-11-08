import { Injectable } from '@angular/core';
import { ProductTemplate } from '../types/productTemplate.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient) { 
    
  }

  // getProductTemplates$() {
  //   return this.http.get<ProductTemplate>(`${environment.apiUrl}/ProductTemplate/getAllProductTemplatesForSchool`)
  //   .pipe(map(pt => ProductTemplate.fromJSON(pt)))
  // }

}

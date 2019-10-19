import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  // Example to use the environment apiUrl
  get test$(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/ApplicationDomain`);
  }


}

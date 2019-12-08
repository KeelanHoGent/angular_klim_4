import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Classroom} from "../types/classroom.model";
import {ProductTemplate} from "../types/productTemplate.model";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  public schoolId = 1;

  constructor(private http: HttpClient) {  }

  getClassrooms$(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${environment.apiUrl}/School/getClassrooms/${this.schoolId}`)
      .pipe(
        map((list: any[]): Classroom[] => {
          console.log(list);
          return list.map(Classroom.fromJSON);
        })
      );
  }

  getClassroom(id: number) {
    return this.http.get<Classroom>(`${environment.apiUrl}/Classroom/${id}`)
      .pipe(map(c => {
        return Classroom.fromJSON(c);
      }));
  }

  deleteClassroom(classroom: Classroom) {
    return this.http.delete<Classroom>(`${environment.apiUrl}/Classroom/${classroom.id}`);
  }

  addNewClassroom(classroom: Classroom) {
      return this.http.post(`${environment.apiUrl}/School/addClassroom/1`, classroom.toJson());

  }
}

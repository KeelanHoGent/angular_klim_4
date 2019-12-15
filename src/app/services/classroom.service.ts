import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Classroom} from '../types/classroom.model';
import {ProductTemplate} from '../types/productTemplate.model';
import {Pupil} from '../types/pupil.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  public schoolId = 1;
  public classRoomId = 1;

  constructor(private http: HttpClient) {  }

  getClassrooms$(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${environment.apiUrl}/School/getClassrooms/${this.schoolId}`)
      .pipe(
        map((list: any[]): Classroom[] => {
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
      return this.http.post(`${environment.apiUrl}/School/addClassroom/${this.schoolId}`, classroom.toJson());

  }

  addNewPupil(newPupil: Pupil, classRoomId: number) {
    return this.http.post(`${environment.apiUrl}/Classroom/addPupil/${classRoomId}`, newPupil.toJson());

  }

  removePupil(pupil: Pupil, classRoomId: number) {
    // Dit is nodig om de body te zetten
    // De body zetten zoals bij addNewPupil werkt hier niet bij, geeft 415
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: pupil.toJson(),
    };
    return this.http.delete(`${environment.apiUrl}/Classroom/removePupil/${classRoomId}`, options);
  }
}

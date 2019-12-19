import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {Classroom} from '../types/classroom.model';
import {Pupil} from '../types/pupil.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  public schoolId = 1;

  private classes: Classroom[] = [];
  private _classes$ = new BehaviorSubject([]);
  classes$: Observable<Classroom[]> = this._classes$;

  constructor(private http: HttpClient) {  }

  getClassrooms$(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${environment.apiUrl}/School/getClassrooms/${this.schoolId}`)
      .pipe(
        tap(list => {
            this.classes = list.map(Classroom.fromJSON);
            this._classes$.next(this.classes);
          }
        )
      );
  }

  getClassroom(id: number) {
    return this.http.get<Classroom>(`${environment.apiUrl}/Classroom/${id}`)
      .pipe(map(c => {
        return Classroom.fromJSON(c);
      }));
  }

  deleteClassroom(classroom: Classroom) {
    return this.http.delete<any>(`${environment.apiUrl}/Classroom/${classroom.id}`)
      .pipe(tap(c => {
          const cIndex = this.classes.findIndex(k => k.id === c.classRoomId);
          this.classes.splice(cIndex, 1);
          this._classes$.next(this.classes);
        }
      ));
  }

  addNewClassroom(classroom: Classroom) {
      return this.http.post(`${environment.apiUrl}/School/addClassroom/${this.schoolId}`, classroom.toJson())
        .pipe(tap(c => {
            this.classes.push(classroom);
            console.log(this.classes);
            this._classes$.next(this.classes);
          }
        ));

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

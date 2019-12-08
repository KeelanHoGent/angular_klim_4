import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Classroom} from "../types/classroom.model";
import {ClassroomService} from "../services/classroom.service";

@Injectable({
  providedIn: 'root'
})

export class ClassroomResolver implements Resolve<Classroom> {
  constructor(private classroomService: ClassroomService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Classroom> {
    return this.classroomService.getClassroom(route.params['id']);
  }
}

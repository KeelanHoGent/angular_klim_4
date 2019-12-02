
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evaluation } from '../types/evaluation.model';


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) {

  }

  addNewEvaluation(groupId:  number, obj: Evaluation) : Observable<Evaluation> {
    return this.http.post(`${environment.apiUrl}/group/addEvaluation/${groupId}`,
    obj.toJson()).pipe(map(Evaluation.fromJSON));
  }

  editEvaluation(groupId: number, evaluationId: number, obj: Evaluation) : Observable<Evaluation> {
    return this.http.put(`${environment.apiUrl}/group/editEvaluation/${groupId}/${evaluationId}`,
    obj.toJson()).pipe(map(Evaluation.fromJSON));
  }

  deleteEvaluation(groupId: number, evaluationId: number,) : Observable<Evaluation>{
    return this.http
    .delete(`${environment.apiUrl}/group/deleteEvaluation/${groupId}/${evaluationId}`)
    .pipe(map(Evaluation.fromJSON));
  }

}







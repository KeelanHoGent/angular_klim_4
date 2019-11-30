import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokenKey = 'currentUser';
  private _users$: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._users$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name);
  }

  login(username: string, password): Observable<boolean> {
    return this.http.post(
      `${environment.apiUrl}/account`,
      {username, password},
      {responseType: 'text'}
    ).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._users$.next(username);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout() {
    if (this._users$.getValue()) {
      localStorage.removeItem('currentUser');
      this._users$.next(null);
    }
  }
}

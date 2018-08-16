import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterUser } from './authorization.component';
import { RegisteredUser } from './models/registered-user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './models/user.interface';

import { HrefConfig } from '../../config/hrefConfig'; 
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  public signIn(model: RegisterUser): Observable<RegisteredUser> {
    return this.http.get<RegisteredUser>(`${HrefConfig.apiServerIp}authorization?login=${model.login}&password=${model.password}`);
  }

  public getDetails(): Observable<User> {
    return this.http.get<User>("https://localhost:5001/api/users");
  }

  public SignUp(model: RegisterUser) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(`${HrefConfig.apiServerIp}authorization/register`, model, httpOptions);
  }
}

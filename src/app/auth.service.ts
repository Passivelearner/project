import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'http://127.0.0.1:8000';
  apiUrl = this.serverUrl + '/api' ;
  public userId: null | string =  localStorage.getItem('UserId');
  public token: null | string =  localStorage.getItem('Token');
  public userRole: null | string =  localStorage.getItem('UserRole');

  public get headers(){
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
  }

}

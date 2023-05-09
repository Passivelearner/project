import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'http://127.0.0.1:8000';
  apiUrl = this.serverUrl + '/api' ;
  userId: null | string =  localStorage.getItem('UserId');
  token: null | string =  localStorage.getItem('Token');
  userRole: null | string =  localStorage.getItem('UserRole');

  public get headers(){
    return new HttpHeaders({
      'Accept':'application/json',
      Authorization : `Bearer ${this.token}`
    })
  }

}

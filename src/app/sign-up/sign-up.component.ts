import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  input_FName:any
  input_MName:any
  input_LName:any
  input_email:string=""
  input_password:any
  constructor(public route:Router, private http:HttpClient ){}
  
  login(){
   
    const headers = new HttpHeaders({
      'key':'accept',
      'value': 'application/json'
    });
    this.http.post<any>('http://127.0.0.1:8000/api/register', {
  
    "email":this.input_email,
    "password":this.input_password,
    headers:headers

    
    })
    .subscribe(data => { console.log(data);this.route.navigate(["sign-in"]) }, error => { console.log(error) })
    
  }

  email(event:any){
    this.input_email=event.target.value

  }
  password(event:any){
    this.input_password=event.target.value
    
  }
}

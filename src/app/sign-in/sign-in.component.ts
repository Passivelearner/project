import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  
  
  input_email:string="";
  input_password:any;
    constructor(public route:Router, private http:HttpClient, private _auth: AuthService){}
    
    login(){
      const headers = new HttpHeaders({
        'accept':'application/json'
      });
  
      this.http.post<any>('http://127.0.0.1:8000/api/login', 
      { 
        "email":this.input_email,
        "password":this.input_password
      }
      )
      .subscribe((response:any) => {
        console.log(response);
        localStorage.setItem("UserId", response.UserId);
        localStorage.setItem("Token", response.Token);
        localStorage.setItem("UserRole", response.Role);
        this._auth.userId = response.UserId;
        this._auth.token = response.Token;
        this._auth.userRole = response.Role;
        if(response.Role == "Admin"){
          this.route.navigate(["admin-page"])
        }
        
        if(response.Role == "Faculty"){
          this.route.navigate(["faculty"])
        }
      
        }, error => { console.log(error) })
      
    }
    email(event:any){
      this.input_email=event.target.value
    }
    password(event:any){
      this.input_password=event.target.value
    }

  signup(){
    this.route.navigate(["sign-up"])
  }

}

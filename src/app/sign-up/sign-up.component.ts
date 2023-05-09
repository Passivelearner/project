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
  input_FName:string =""
  input_LName:string =""
  input_email:string=""
  input_MName:string =""
  bdate:any;
  date:any;
  gender:any;
  status:any;
  mobile_no:string="";
  input_password:any;
  email_data:any;
  password_data:string ="";
  confirm_password_data:string="";

  constructor(public route:Router, private http:HttpClient ){}
  
  register(){
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    let statusnew = document.getElementById("stats");
    this.status = statusnew

    let gender_identification = document.getElementById("gender");
    this.gender = gender_identification

    let calendarvalue = document.getElementById("calendar")
    this.bdate = calendarvalue

    const body = {
      "fname":this.input_FName,
      "lname":this.input_LName,
      "mname":this.input_MName,
      "bdate":this.bdate.value,
      "mobileNo":this.mobile_no,
      "gender":this.gender.value,
      "maritalstatus":this.status.value,
      "email":this.email_data,
      "password":this.password_data,
      "password_confirmation":this.confirm_password_data
    }
    this.http.post<any>('http://127.0.0.1:8000/api/register',body,{headers:headers})
    .subscribe(data => { console.log(data);this.route.navigate(["sign-in"]) }, error => { console.log(error) })
  }

  email(event:any){
    this.email_data = event.target.value
  }
  password(event:any){
    this.password_data = event.target.value
  }
  contact(event:any){
    this.mobile_no = event.target.value
  }
  lastname(event:any){
    this.input_LName = event.target.value
  }
  firstname(event:any){
    this.input_FName = event.target.value
  }
  confirm_password(event:any){
    this.confirm_password_data = event.target.value
  }


}

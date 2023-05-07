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

  constructor(public route:Router, private http:HttpClient){}
  
  login(){
    this.route.navigate(["sign-in"])

    firstValueFrom(this.http.post("http://127.0.0.1:8000/login",{}))
    .then((response)=>{
      console.log(response)
    })
  }
}

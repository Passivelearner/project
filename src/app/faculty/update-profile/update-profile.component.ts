import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit{


  firstname:string ="";
  firstname_display:any;
  lastname:string="";
  contact:any;
  status:any;
  bdate:any;
  gender:any;
  token:any;
  id:any
  constructor(private http: HttpClient, public route: Router){}

  
  ngOnInit(): void {
    this.id = sessionStorage.getItem("id")as string
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    this.http.get("http://127.0.0.1:8000/api/faculty/"+this.id+"/profile",{headers:headers})
    .subscribe((response:any)=>{
     this.firstname_display = response

    })
  }


  update(){
    this.token = sessionStorage.getItem("token2")as string
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization':'Bearer '+this.token
    });
    let statusnew = document.getElementById("stats");
    this.status = statusnew

    let gender_identification = document.getElementById("gender");
    this.gender = gender_identification

    let calendarvalue = document.getElementById("calendar")
    this.bdate = calendarvalue

    const body = {
      "fname":this.firstname,
      "lname":this.lastname,
      "bdate":this.bdate.value,
      "mobileNo":this.contact,
      "gender":this.gender.value,
      "maritalstatus":this.status.value,

    }
    this.http.post<any>('http://127.0.0.1:8000/api/UpdateInfo',body,{headers:headers})
    .subscribe((data:any) => 
    {

      window.location.reload()

    }, error => { console.log(error) })
  }
}

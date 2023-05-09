import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { MoreInfoComponent } from '../faculty/more-info/more-info.component';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { UpdateProfileComponent } from '../faculty/update-profile/update-profile.component';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit{
  program:any
  id:string = "";
  firstname:any;
  lastname:string = "";
    
  constructor(public route:Router, private http:HttpClient, public dialog:Dialog){}
  ngOnInit(){
    this.id = sessionStorage.getItem("id")as string
    const header = new HttpHeaders({
      'Accept':'application/json'
    })
    // this.http.get("http://127.0.0.1:8000/api/faculty/"+this.id+"/assigned-programs",{headers:header})
    // .subscribe((data:any)=>{
    //   this.program = data
    // })

    this.http.get("http://127.0.0.1:8000/api/programs",{headers:header})
    .subscribe((data:any)=>{
      this.program = data
      console.log(this.program)
    })

    this.http.get("http://127.0.0.1:8000/api/faculty/"+this.id+"/profile",{headers:header})
    .subscribe((response:any)=>{
      console.log(response)
     this.firstname = response

    })
  }

  
  moreinfo(value_new_id:any){
    console.log(value_new_id)
    sessionStorage.setItem("Extension_Id", value_new_id)
    this.dialog.open(MoreInfoComponent)
}
  partners(){
    this.route.navigate(["faculty-partners"])
  }
  updateprofile(){
    this.dialog.open(UpdateProfileComponent)
  }
}

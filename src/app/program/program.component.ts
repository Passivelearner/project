import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit{
  programs:any;
  program_title:string ="";
  program_start:string ="";
  program_end:string ="";
  program_place:string ="";
  program_details:string ="";
  program_lead:string ="";
  program_member:string ="";


    
  constructor(public route:Router, private http:HttpClient){}

  ngOnInit(){
    this.http.get<any>('http://127.0.0.1:8000/api/programs')
      .subscribe(data => { console.log(data); this.programs=data }, error => { console.log(error) })
  }


  programs_data(){

    console.log(this.program_title)
    console.log(this.program_place)
    console.log(this.program_details)
    console.log(this.program_lead)
    console.log(this.program_member)
  }
  dashboard(){
    this.route.navigate(["admin-page"])
  }
  program(){
    this.route.navigate(["program"])
  }
  manage_user(){
    this.route.navigate(["manage-account"])
  }
  partners_management(){
    this.route.navigate(["partnership"])
  }
  title(event:any){
    this.program_title=event.target.value
  }
  place(event:any){
    this.program_place=event.target.value
  }
  details(event:any){
    this.program_details=event.target.value
  }
  lead(event:any){
    this.program_lead=event.target.value
  }
  member(event:any){
    this.program_member=event.target.value
  }
}

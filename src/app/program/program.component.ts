import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit{
  programs:any;
  program_title = new FormControl('');
  program_start= new FormControl('');
  program_end= new FormControl('');
  program_place = new FormControl('');
  program_details= new FormControl('');
  program_lead = new FormControl('');
  program_partner = new FormControl('') ;

  FacultyLeadDropDownValues : any;
  PartnerDropDownValues : any;
  
  
  constructor(public route:Router, private http:HttpClient, private _auth: AuthService){}

  ngOnInit(){
    this.http.get<any>(this._auth.apiUrl + '/programs')
      .subscribe(data => { 
        console.log(data); 
        this.programs=data }, 
        error => { console.log(error) })

      this.http.get<any>(this._auth.apiUrl + '/faculty/dropdownValues')
      .subscribe(data => {
       this.FacultyLeadDropDownValues = data
       console.log(data)
      }, (error) => {
       console.error(error)
      })

    this.http.get<any>(this._auth.apiUrl + '/partners')
      .subscribe(data => {
      this.PartnerDropDownValues = data
      console.log(data)
     }, (error) => {
      console.error(error)
     })
  }


  createProgram(){

    this.http.post<any>(this._auth.apiUrl + '/programs/add', {
      ProgramTitle : this.program_title.value,
      Start_Date : this.program_start.value,
      End_Date : this.program_end.value,
      Place : this.program_place.value,
      Program_Details : this.program_details.value,
      Program_Flow_Url : 'asdsadsadasdsadd',
      PartnerId : this.program_partner.value,
      ProgramLeadId : this.program_lead.value,

    }).subscribe(data => {
      console.log(data)
      this.ngOnInit();
    }, error => console.log(error))

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
    this.program_partner=event.target.value
  }

  logout(){
    this.route.navigate(['/'])
  }
}

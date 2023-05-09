import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';
import { SeeMoreComponent } from '../partnership/see-more/see-more.component';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit{
  partners:any;
  company:string="";
  Partnername:string = ""
  ContactPerson:string = ""
  ContactNumber:any;
  MOA:any;
  Start_Date:any;
  End_Date:any;
  MOA_DATA:any;
  PartnerImage:any;

  value_new_id:any;
  constructor(public route:Router, private http:HttpClient,public dialog:Dialog){}
  ngOnInit(){
    this.http.get<any>('http://127.0.0.1:8000/api/partners')
      .subscribe(data => { console.log(data); this.partners=data }, error => { console.log(error) })

      
  }

  seemore(value_new_id:any){
      console.log(value_new_id)
      sessionStorage.setItem("partner_id", value_new_id)
      this.dialog.open(SeeMoreComponent)
  }
  addpartner(){

    let start_date = document.getElementById("start_calendar")
    this.Start_Date = start_date
    let end_date = document.getElementById("end_calendar")
    this.End_Date = end_date

    let MOAFILE = document.getElementById("MOA_FILE")
    this.MOA_DATA = MOAFILE
    console.log(this.MOA_DATA.value)

    const heading = new HttpHeaders({
      'Account':'application/json'
    })
    const body = {
      "PartnerName":this.Partnername,
      "ContactPerson":this.ContactPerson,
      "ContactNumber":this.ContactNumber,
      "MOA":  this.MOA_DATA,
      "Start_Date": this.Start_Date.value,
      "End_Date": this.End_Date.value,
      "PartnerImage": this.MOA_DATA     
    }
    this.http.post("http://127.0.0.1:8000/api/partners/addpartner",body,{headers:heading})
    .subscribe((response:any)=>{
      console.log(response)
    })
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

}

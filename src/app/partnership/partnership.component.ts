import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit{
 partners:any
    
  constructor(public route:Router, private http:HttpClient){}
  ngOnInit(){
    this.http.get<any>('http://127.0.0.1:8000/api/partners/')
      .subscribe(data => { console.log(data); this.partners=data }, error => { console.log(error) })
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

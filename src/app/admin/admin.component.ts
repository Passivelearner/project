import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  {
  users:any;
  
  
constructor(public route:Router , private _http:HttpClient){}

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
logout(){
  this.route.navigate([""])
}
}

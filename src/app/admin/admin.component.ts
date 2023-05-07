import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  
constructor(public route:Router){}

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

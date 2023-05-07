import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit{
  programs:any
    
  constructor(public route:Router, private http:HttpClient){}
  ngOnInit(){
    this.http.get<any>('http://127.0.0.1:8000/api/programs')
      .subscribe(data => { console.log(data); this.programs=data }, error => { console.log(error) })
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

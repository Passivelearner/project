import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateInfoComponent } from '../admin-manage-account/update-info/update-info.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-admin-manage-account',
  templateUrl: './admin-manage-account.component.html',
  styleUrls: ['./admin-manage-account.component.scss']
})
export class AdminManageAccountComponent implements OnInit{
    users:any
    num:any;
    num2:any;
    approved:string = "1"
    constructor(public route:Router, private http:HttpClient, public dialog:Dialog){}
    ngOnInit(){
      this.http.get<any>('http://127.0.0.1:8000/api/admin/users')
        .subscribe(data => {
          console.log(data);
          this.users=data
        }, error => { console.log(error) })

      
    }
    //updateinfo
    updateinfo(){
      this.dialog.open(UpdateInfoComponent);
    }

    approved_btn(){

      this.http.get<any>('http://127.0.0.1:8000/api/admin/users')
      .subscribe((response:any) => {
        response.data.IsApproved = this.approved
        console.log(response)
      }, error => { console.log(error) })
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

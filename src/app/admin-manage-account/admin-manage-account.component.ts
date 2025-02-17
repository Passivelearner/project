import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateInfoComponent } from '../admin-manage-account/update-info/update-info.component';
import { Dialog } from '@angular/cdk/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-manage-account',
  templateUrl: './admin-manage-account.component.html',
  styleUrls: ['./admin-manage-account.component.scss']
})
export class AdminManageAccountComponent implements OnInit{
    users:any
    filteredusers: any;
    num:any;
    num2:any;
    approved:string = "1"
    dialogInstance : any = null;
    constructor(public route:Router, private http:HttpClient, public dialog:Dialog, private _auth: AuthService){}
    ngOnInit(){
      console.log('Users')
      console.log('Token:' + this._auth.token)
      this.http.get<any>(this._auth.apiUrl + '/admin/users')
        .subscribe(data => {
          console.log(data);
          this.users=data
          this.filteredusers = data;
        }, error => { console.log(error) })

      
    }
    //updateinfo
    updateinfo(id: string){
      localStorage.setItem('UpdateId', id); 
      this.dialog.open(UpdateInfoComponent);
    }

    toggleAccountActivation(id:string){
        this.http.post<any>(this._auth.apiUrl + '/admin/toggle', { ID : id })
                 .subscribe(data => {
                  console.log(data)
                  this.ngOnInit();
                 }, error => {
                  console.log(error)
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

      onKeyupEvent(event:any){
        if (event.target.value == ''){
          this.filteredusers = this.users
        } else {
          this.filteredusers = this.users.filter((p:any) => {
            return p.FName.toLowerCase().includes(event.target.value.toLowerCase()) || p.LName.toLowerCase().includes(event.target.value.toLowerCase()) || p.email.toLowerCase().includes(event.target.value.toLowerCase()) 
          })
        }
      }

      logout(){
        this.route.navigate(['/'])
      }

      getUserSummary(){
              this.http
          .get<any>(
            this._auth.apiUrl +
              '/getUserSummary',
            this._auth.headers
          )
          .subscribe(
            (data) => {
              console.log(data);
              const byteArray = new Uint8Array(
                atob(data.pdf)
                  .split('')
                  .map((char) => char.charCodeAt(0))
              );
              const file = new Blob([byteArray], { type: 'application/pdf' });
              const fileURL = URL.createObjectURL(file);
              let pdfName = 'reports.pdf';
              let newVariable: any = window.navigator;
              if (newVariable && newVariable.msSaveOrOpenBlob) {
                newVariable.msSaveOrOpenBlob(file, pdfName);
              } else {
                window.open(
                  fileURL,
                  'newWin',
                  'modal=yes,width=800,height=1000,resizable=no,scrollbars=no'
                );
              }
            },
            (error) => {
              console.error(error);
              console.log('error');
            }
          );
      }
}

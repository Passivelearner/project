import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users:any;
  faculty_total:any;
  id:any;
  firstname:any;

  facultyDropdownValues : any;
  
constructor(public route:Router , private http:HttpClient, private _auth: AuthService){}

ngOnInit(): void {

  console.log(this._auth.token)

  this.http.get<any>('http://127.0.0.1:8000/api/admin/users')
    .subscribe((data:any) => {
      console.log('Users')
      console.log('Token:' + this._auth.token)
      this.faculty_total = data.length
    }, error => { console.log(error) })


  const header = new HttpHeaders({
    'Accept':'application/json'
  })
  
  this.id = sessionStorage.getItem("id")as string
  this.http.get<any>("http://127.0.0.1:8000/api/faculty/"+this.id+"/profile")
  .subscribe((response:any)=>{
   console.log('Faculty')
   console.log(response)
   this.firstname = response
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
logout(){
  this.route.navigate(['/'])
}

GetProgramReport() {
  this.http
    .get<any>(
      this._auth.apiUrl +
        '/getProgramSummary',
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

import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit{

  program_id:any;
  program_data:any
  program_member:any
  constructor(private http:HttpClient, public _auth: AuthService){}

  ngOnInit(): void {

    this.program_id = sessionStorage.getItem("Extension_Id")as string
    this.http.get("http://127.0.0.1:8000/api/programs/"+this.program_id,)
    .subscribe((response:any)=>{
      console.log(response)

      this.program_data = response
      console.log(this.program_data)
    })
  }

  generatePartnerSpecific(){
    this.http
    .get<any>(
      this._auth.apiUrl +
        '/getProgramSummary/' + sessionStorage.getItem("Extension_Id") + '/report',
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

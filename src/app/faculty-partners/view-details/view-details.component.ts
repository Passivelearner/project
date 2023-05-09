import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent {

  user_id:string = "";
  partners_data:any

  constructor(private http:HttpClient, public auth:AuthService){}

  imageUrl : any;

  ngOnInit(): void {
      
    this.user_id = sessionStorage.getItem("partner_id") as string
    this.http.get("http://127.0.0.1:8000/api/partners/"+this.user_id)
    .subscribe((response)=>{

      console.log(response)
      this.partners_data = response
      this.imageUrl = this.partners_data[0].PartnerImageUrl
    })
  }

  generatePartnerSpecific(){
    this.http
    .get<any>(
      this.auth.apiUrl +
        '/getPartnerSummary/' + sessionStorage.getItem("partner_id"),
      this.auth.headers
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

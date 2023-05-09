import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent {

  user_id:string ="";
  partners_data:any

  constructor(private http:HttpClient){}

  ngOnInit(): void {
      
    this.user_id = sessionStorage.getItem("partner_id") as string
    this.http.get("http://127.0.0.1:8000/api/partners/"+this.user_id)
    .subscribe((response)=>{
      console.log(response)
      this.partners_data = response
    })
  }

}

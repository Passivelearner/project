import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent implements OnInit{

  user_id:string ="";

  constructor(private http:HttpClient){}

  ngOnInit(): void {
      
    this.user_id = sessionStorage.getItem("partner_id") as string
    this.http.get("http://127.0.0.1:8000/api/partners/"+this.user_id)
    .subscribe((response)=>{
      console.log(response)
    })
  }

  
}

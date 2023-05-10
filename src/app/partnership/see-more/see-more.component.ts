import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent implements OnInit{

  user_id:string ="";
  partners_data:any;
  image_url: any;

  constructor(private http:HttpClient, public auth: AuthService){}

  ngOnInit(): void {
      
    this.user_id = sessionStorage.getItem("partner_id") as string
    this.http.get("http://127.0.0.1:8000/api/partners/"+sessionStorage.getItem("partner_id"))
    .subscribe((response)=>{
      console.log(response)
      this.partners_data = response
      this.image_url = this.partners_data[0].PartnerImageUrl
    })
  }

  renew(){
    
  }
}

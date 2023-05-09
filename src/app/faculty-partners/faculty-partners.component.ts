import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';
import { ViewDetailsComponent } from '../faculty-partners/view-details/view-details.component';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-faculty-partners',
  templateUrl: './faculty-partners.component.html',
  styleUrls: ['./faculty-partners.component.scss']
})
export class FacultyPartnersComponent implements OnInit{
  partners:any
  filteredpartners: any;
   constructor(public route:Router, private http:HttpClient,public dialog:Dialog, private _auth:AuthService){}
   ngOnInit(){
     this.http.get<any>(this._auth.apiUrl + '/partners')
       .subscribe(data => { console.log(data); 
                            this.partners=data 
                            this.filteredpartners = data
                          }, error => { console.log(error) })
   }
  faculty(){
    this.route.navigate(["faculty"])
  }

  seemore(value_new_id:any){
    console.log(value_new_id)
    sessionStorage.setItem("partner_id", value_new_id)
    this.dialog.open(ViewDetailsComponent)
}

onKeyupEvent(event:any){
  if (event.target.value == ''){
    this.filteredpartners = this.partners
  } else {
    this.filteredpartners = this.partners.filter((p:any) => {
      return p.PartnerName.toLowerCase().includes(event.target.value.toLowerCase())
    })
  }
}

goToLogin(){
  this.route.navigate([''])
}

}

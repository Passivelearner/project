import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';
import { ViewDetailsComponent } from '../faculty-partners/view-details/view-details.component';
@Component({
  selector: 'app-faculty-partners',
  templateUrl: './faculty-partners.component.html',
  styleUrls: ['./faculty-partners.component.scss']
})
export class FacultyPartnersComponent implements OnInit{
  partners:any
     
   constructor(public route:Router, private http:HttpClient,public dialog:Dialog){}
   ngOnInit(){
     this.http.get<any>('http://127.0.0.1:8000/api/partners/')
       .subscribe(data => { console.log(data); this.partners=data }, error => { console.log(error) })
   }
  faculty(){
    this.route.navigate(["faculty"])
  }

  seemore(value_new_id:any){
    console.log(value_new_id)
    sessionStorage.setItem("partner_id", value_new_id)
    this.dialog.open(ViewDetailsComponent)
}

}

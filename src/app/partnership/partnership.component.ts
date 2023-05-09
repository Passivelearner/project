import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';
import { SeeMoreComponent } from '../partnership/see-more/see-more.component';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit{

  formData = new FormData();

  partners:any;
  company = new FormControl();
  Partnername = new FormControl();
  ContactPerson = new FormControl();
  ContactNumber = new FormControl();
  MOAFile = new FormControl();
  Start_Date = new FormControl();
  End_Date = new FormControl();
  PartnerImage = new FormControl();


  MOAfileToUpload: File | null = null;
  ImageToUpload: File | null = null;
  value_new_id:any;
  constructor(public route:Router, private http:HttpClient, private _auth: AuthService, public dialog:Dialog){}
  ngOnInit(){
    this.http.get<any>(this._auth.apiUrl + '/partners')
      .subscribe(data => { console.log(data); this.partners=data }, error => { console.log(error) })

      
  }

  seemore(value_new_id:any){
      console.log(value_new_id)
      sessionStorage.setItem("partner_id", value_new_id)
      this.dialog.open(SeeMoreComponent)
  }
  addpartner(){

    this.formData.append('PartnerName', this.Partnername.value);
    this.formData.append('ContactPerson', this.ContactPerson.value);
    this.formData.append('ContactNumber', this.ContactNumber.value);
    this.formData.append('PartnerName', this.Partnername.value);
    this.formData.append('Start_Date', this.Start_Date.value);
    this.formData.append('End_Date', this.End_Date.value);


    const heading = new HttpHeaders({
      'accept':'application/json'
    })
    
    this.http.post( this._auth.apiUrl + "/partners/addpartner",this.formData,{headers:heading})
    .subscribe((response:any)=>{
      console.log(response)
      this.ngOnInit();
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

  onMoaInput(event: any){
    let file:File = event.target.files[0];
    this.formData.append('MOA', file);
    this.MOAfileToUpload = file;
  } 
  onPartnerImageUpload(event: any){
    let file:File = event.target.files[0];
    this.formData.append('PartnerImage', file);
    this.ImageToUpload = file;
  }

}

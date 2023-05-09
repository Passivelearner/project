import { Component, Output, EventEmitter, Inject, OnInit, Injector} from '@angular/core';
import  {MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent {
  
  constructor(private _auth: AuthService, private http: HttpClient) {}

  FName = new FormControl('');
  LName = new FormControl('');
  BDate = new FormControl();
  Gender = new FormControl('');
  Contact = new FormControl('');
  MStatus = new FormControl('');



  updateUserInfo(){
    const userId = localStorage.getItem('UpdateId');
    this.http.post<any>(this._auth.apiUrl + '/UpdateInfo', {
      id : userId,
      fname : this.FName.value,
      lname : this.LName.value,
      bdate : this.BDate.value,
      gender : this.Gender.value,
      mobileNo : this.Contact.value,
      maritalstatus : this.MStatus.value,
    }).subscribe(data => {
      console.log(data)
    }, error => {
      console.error(error)
    })
  }

}

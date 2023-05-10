import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Dialog } from '@angular/cdk/dialog';
import { FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addmemberdialog',
  templateUrl: './addmemberdialog.component.html',
  styleUrls: ['./addmemberdialog.component.scss']
})
export class AddmemberdialogComponent implements OnInit {

  FacultyList : any;

  Faculty = new FormControl();

  constructor(private _auth: AuthService,  private dialog: Dialog, private http:HttpClient ){}

  ngOnInit(): void {
    this.http.get<any>(this._auth.apiUrl + '/faculty/dropdownValues')
             .subscribe(data => {
              this.FacultyList = data
              console.log(this.FacultyList)
             }, error => {
              console.log(error)
             })
  }

  AddMember(){
    this.http.post<any>(this._auth.apiUrl + '/programs/addmember', {
      UserIdFK : this.Faculty.value,
      ProgramIdFK : localStorage.getItem('AddMemberExtensionId')
    }).subscribe((data) => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
}

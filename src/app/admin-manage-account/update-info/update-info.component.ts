import { Component, Output, EventEmitter, Inject, OnInit, Injector} from '@angular/core';
import  {MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent implements OnInit{
  
  constructor(private _auth: AuthService, @Inject(MAT_DIALOG_DATA) public data: any, private injector: Injector) {}

  FName = new FormControl('');
  LName = new FormControl('');
  BDate = new FormControl();
  Gender = new FormControl('');
  Contact = new FormControl('');
  MStatus = new FormControl('');

  ngOnInit(){
    console.log(this.injector.get(MAT_DIALOG_DATA, null));
    console.log(this.data);
  }

  CLICK(){
    console.log(this.data);
  }

}

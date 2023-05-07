import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { MoreInfoComponent } from '../faculty/more-info/more-info.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent {

  constructor(public route:Router, public dialog:Dialog){}
  
  modal():void {

    this.dialog.open<string>(MoreInfoComponent);
  }
  
  partners(){
    this.route.navigate(["faculty-partners"])
  }
}

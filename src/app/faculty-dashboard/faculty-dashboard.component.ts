import { Component, OnInit,Inject } from '@angular/core';
import { ModalEventComponent } from '../faculty-dashboard/modal-event/modal-event.component';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.scss']
})
export class FacultyDashboardComponent{

  constructor(public dialog: Dialog) {}
 
  
}

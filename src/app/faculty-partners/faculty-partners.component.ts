import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-partners',
  templateUrl: './faculty-partners.component.html',
  styleUrls: ['./faculty-partners.component.scss']
})
export class FacultyPartnersComponent {

  constructor(public route:Router){}

  faculty(){
    this.route.navigate(["faculty"])
  }

}

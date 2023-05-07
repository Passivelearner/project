import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  
  constructor(public route:Router){}

  login(){
    this.route.navigate(["admin-page"])
  }

  signup(){
    this.route.navigate(["sign-up"])
  }

}

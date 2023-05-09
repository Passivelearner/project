import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit{

  program_id:any;
  program_data:any
  program_member:any
  constructor(private http:HttpClient){}

  ngOnInit(): void {

    this.program_id = sessionStorage.getItem("Extension_Id")as string
    this.http.get("http://127.0.0.1:8000/api/programs/"+this.program_id,)
    .subscribe((response:any)=>{
      console.log(response)

      this.program_data = response
      console.log(this.program_data)
    })
  }
  

}

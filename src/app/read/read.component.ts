import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  
import{  InsertedSuccess,
  Read,
  DoctorDetails,
  UniqueConstraintError}from '../doct';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent  {
canshow:boolean=false;
  constructor(private Service:DoctorService){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: DoctorDetails = {
  licence_num:0,
  doct_name:'',
  doct_email:'',
  doct_ph_num:0,
  doct_age:0,
  doct_desgn:'',
  doct_hosp:'',
  doct_exp:0,
  doct_add:'',
  };
  a=[];
  SuccessMsg = '';
  ErrorMsg = '';
  Read(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Read(this.User.licence_num).subscribe(
      (data:any)=>{
        if(data){
          this.a=data.Result[0];
          console.log(data);
          this.User = {
            licence_num:this.a[0],
            doct_name:this.a[1],
            doct_email:this.a[2],
            doct_ph_num:this.a[3],
            doct_age:this.a[4],
            doct_desgn:this.a[5],
            doct_hosp:this.a[6],
            doct_exp:this.a[7],
            doct_add:this.a[8]
          
            };
           this.canshow=true;
       console.log(this.a);
      

        }
        else{
         alert("Can't read");
        }
      }
    )
  }
}

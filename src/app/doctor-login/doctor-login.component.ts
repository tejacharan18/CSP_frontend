import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  
import{  InsertedSuccess,
  Read,
  Login,
  doctorlogin,
  DoctorDetails,
  UniqueConstraintError}from '../doct';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  constructor(private Service:DoctorService,private router: Router){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  a=[]
username:string='';
password:string='';
Doctor:doctorlogin={
doct_email:'',
licence_num:'',
doct_name:''
}
w:string='';
Read(){
  this.username=this.Doctor.doct_email;
  this.password=this.Doctor.licence_num;
  this.Subscription=this.Service.Dlogin(this.Doctor.doct_email).subscribe(
    (data:any)=>{
      if(data){
        this.a=data.Result[0];
        this.Doctor={
          doct_email:this.a[0],
          licence_num:this.a[1],
          doct_name:this.a[2]
        }
        
        if(this.username==this.Doctor.doct_email && this.password==this.Doctor.licence_num )
        {
          const emailparts:string[] =this.Doctor.doct_email.split('@');
          const user:string = emailparts[0];
          this.Service.setuser(user);
          console.log(user);
          this.router.navigate(['/homee']);
        }
        else{
          document.write('failed');
        }
    }
      else{
       alert("Can't read");
      }
    }
  )
}
}

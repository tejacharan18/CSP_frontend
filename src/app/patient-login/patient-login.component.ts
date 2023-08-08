import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  
import{  InsertedSuccess,
  Read,
  Login,
  DoctorDetails,
  UniqueConstraintError}from '../doct';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
  constructor(private Service:DoctorService,private router: Router){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  a=[]
username:string='';
password:string='';
Patient:Login={
email:'',
phone_no:''
}

Read(){
  this.username=this.Patient.email;
  this.password=this.Patient.phone_no;
  this.Subscription=this.Service.view(this.Patient.email).subscribe(
    (data:any)=>{
      if(data){
        this.a=data.Result[0];
        this.Patient={
          email:this.a[0],
          phone_no:this.a[1]
        }
        
        if(this.username==this.Patient.email && this.password==this.Patient.phone_no )
        {
          const emailparts:string[] =this.Patient.email.split('@');
          const user:string = emailparts[0];
          this.Service.setUsername(user);
          console.log(user);
          this.router.navigate(['/home']);
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

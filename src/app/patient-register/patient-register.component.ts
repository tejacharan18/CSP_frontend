import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

import{  InsertedSuccess,
  PatientDetails,
  Read,
  DoctorDetails,
  UniqueConstraintError}from '../doct';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent {
  constructor(private Service:DoctorService,private router: Router,private appComponent: AppComponent){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: PatientDetails = {
    patient_name:'',
    age:0,
    email:'',
    phone_no:0,
    height:0,
    weight:0,
    blood_group:'',
    address:'',
    previous_health_issues:'',
    disability:'',
    diabetic:'',
    img:'',
  };
  SuccessMsg = '';
  ErrorMsg = '';
 


  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insertp(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} alredy Exists`;
          
          this.appComponent.canshow=true;
        } else {
          
          this.SuccessMsg = ` Inserted Succesfully`;
          Form.reset();
        }
       
      }
    }
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}

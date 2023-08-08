import { Component,OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';  
import{  InsertedSuccess,
  Read,
  DoctorDetails,
  UniqueConstraintError}from '../doct';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit , OnDestroy {
  canShow:boolean=true;
  show:boolean=false;
  show1:boolean=true;

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
  SuccessMsg = '';
  ErrorMsg = '';
 
register(){
this.show=true;
this.show1=false;
}

  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.licence_num} alredy Exists`;
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
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { DoctorLoginComponent } from '../doctor-login/doctor-login.component';
import { NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';  
import{  InsertedSuccess,
  Read,
  DoctorDetails,
  UniqueConstraintError}from '../doct';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  username:string='';
  canShow:boolean=true;
  show:boolean=false;
  home:boolean=true;
  route:boolean=false;
  constructor(private Service:DoctorService,private router: Router,
    private appComponent: AppComponent){}
  ngOnInit() {
    this.Service.user$.subscribe(user =>{
      this.username = user;
      console.log(this.username);
     })
  }
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
  doct_add:''
  };

  SuccessMsg = '';
  ErrorMsg = '';
  Delete(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Delete(this.User.licence_num).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          this.SuccessMsg = ` SUCCESSFULLY DELETED`;
        }
        else{
          alert("failed");
          this.ErrorMsg = `${this.User.licence_num} NO RECORD FOUND`;
         }
      }
    )
  }
  popup(){
    this.show=true;
   }
  closepopup(){
   this.show=false;
  }
  closeoverlay(e:any){
   if(e.target.classList.contains('overlay')){
     this.show=false; 
   }
  }
 logout(){
  this.router.navigate(['/']);
    this.appComponent.canshow=true;
    this.appComponent.show=true;
    this.appComponent.test=false;
    this.appComponent.show1=true;
 
 }
 stop(){
  this.route=true;
  this.home=false;
 }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}

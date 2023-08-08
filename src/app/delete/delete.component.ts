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
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit , OnDestroy{

  canShow:boolean=true;
  show:boolean=false;
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
          this.canshow=false;
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
    this.canshow=true;
   }
  closepopup(){
   this.show=false;
  }
  closeoverlay(e:any){
   if(e.target.classList.contains('overlay')){
     this.show=false; 
   }
  }
 
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
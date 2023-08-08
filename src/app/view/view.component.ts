import { Component ,OnInit ,OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  PatientDetails,
  UniqueConstraintError,
  Read, 
  } from '../doct';
import { Subscription } from 'rxjs';
import { DoctorService } from '../doctor.service';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit , OnDestroy {
  res:any=[];
  dat=[]
  show:boolean=false;
  canshow:boolean=false;
  tablepop:boolean=false;
  mainpop:boolean=true;
  updat:boolean=false;
  show1:boolean=false;

  constructor(private Service:DoctorService){}
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
    img:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  sample=this.User;
 

  read(){
    this.tablepop=true
    this.mainpop=false
    this.Subscription=this.Service.read().subscribe(
      {
        next:(Data)=>{
          console.log(Data);
          this.res=Data.Result;
        },
        error:(Err)=>{
          console.log(Err);
        }
      }
    )
  }

  Delete(email:string){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Delete1(email).subscribe(
      (data)=>{
        if(data){
          console.log(data);
          this.canshow=true;
          this.read();

        }
        else{
          console.log("failed");
        }
      }
    )
  }
  closepopup(){
    this.show=false;
   }
   closeoverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.show=false; 
    }
   }
  read1(email:string){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.show=true;
    this.canshow=true;
    this.Subscription=this.Service.read1(email).subscribe(
      (data : any)=>{
        if(data){
          this.dat=data.Result[0];
          console.log(data);
          this.sample={
            patient_name:this.dat[0],
            age:this.dat[1],
            email:this.dat[2],
            phone_no:this.dat[3],
            height:this.dat[4],
            weight:this.dat[5],
            blood_group:this.dat[6],
            previous_health_issues:this.dat[7],
            disability:this.dat[8],
            diabetic:this.dat[9],
            address:this.dat[10],
            img:this.dat[11]

          }
          

        }
        else{
          console.log("failed");
        }
      }
    )
  }
  closepopup1(){
    this.show1=false;
   }
   closeoverlay1(e:any){
    if(e.target.classList.contains('overlay')){
      this.show1=false; 
    }
   }
  read2(email:string){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.read1(email).subscribe(
      (data : any)=>{
        if(data){
          this.dat=data.Result[0];
          console.log(data);
          this.sample={
            patient_name:this.dat[0],
            age:this.dat[1],
            email:this.dat[2],
            phone_no:this.dat[3],
            height:this.dat[4],
            weight:this.dat[5],
            blood_group:this.dat[6],
            previous_health_issues:this.dat[7],
            disability:this.dat[8],
            diabetic:this.dat[9],
            address:this.dat[10],
            img:this.dat[11]

          }
          
          this.updat=true;
          this.show1=true;
        }
        else{
          console.log("failed");
        }
      }
    )
  }
  update(){
    this.ErrorMsg='';
    this.SuccessMsg='';
    this.Subscription=this.Service.Updatep(this.sample.email,this.sample).subscribe(
      (data:any)=>{
        if(data){
          this.SuccessMsg="updated successfully";
          this.updat=false;
          this.read();
        }
        else{
          console.log("can't update");
        }
      }
    )
    console.log(this.User);
  }


  
 


  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}
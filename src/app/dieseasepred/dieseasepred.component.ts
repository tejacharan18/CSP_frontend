import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import{  InsertedSuccess,
  Read,
  symptoms,
  doctorlogin,
  DoctorDetails,
  UniqueConstraintError}from '../doct';
  import { Observable } from "rxjs";
  import { Subscription } from 'rxjs';
  import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-dieseasepred',
  templateUrl: './dieseasepred.component.html',
  styleUrls: ['./dieseasepred.component.css']
})
export class DieseasepredComponent {
  
  constructor(private Service:DoctorService,private http: HttpClient){}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  diag(Form: NgForm) {
    this.Subscription=this.Service.Read(Form.value).subscribe(
      (data:any)=>{
        if(data){
          
        }
        else{
         alert("Can't read");
        }
      }
    )
}


// predict(Form: NgForm) {
//   this.symptom=Form.value;
//   console.log(this.symptom)
//   this.Subscription = this.Service.reads(this.symptom).subscribe({
      
        
      
//   }
//   )
// }
predict:boolean=false;
show1:boolean=false;
user={
fever:false,
headache:false,
vomting:false,
rash:false,
sweating:false,
cough:false,
diarrhea:false,
tiredness:false,
weightgain:false,
hoarsevoice:false,
constipation:false,
fatigue:false,
stomachpain:false,
musclepain:false,
nausea:false,
weakness:false,
dryskin:false,
puffyface:false,
eyepain:false,
cold:false
}
syms:string[]=['fever','headache','vomting','rash','sweating','cough','diarrhea','tiredness','weight gain',
'hoarse voice','constipation','fatigue','stomach pain','muscle pain','nausea','weakness','dry skin',
'puffy face','eyepain','cold']
symtom:any=[]
// symptom:any=[this.user.fever,this.user.headache,this.user.vomting,this.user.rash,
//   this.user.sweating,this.user.cough,this.user.diarrhea
// ,this.user.tiredness,this.user.weightgain,this.user.hoarsevoice,this.user.constipation,
// this.user.fatigue,this.user.stomachpain,this.user.musclepain,this.user.nausea,this.user.weakness
// ,this.user.dryskin,this.user.puffyface,this.user.eyepain,this.user.cold];
a:any[]=[];
b:any=[];
c:any=[];
symp:string='';
get() {
  this.symtom=[this.user.fever,this.user.headache,this.user.vomting,this.user.rash,
    this.user.sweating,this.user.cough,this.user.diarrhea
  ,this.user.tiredness,this.user.weightgain,this.user.hoarsevoice,this.user.constipation,
  this.user.fatigue,this.user.stomachpain,this.user.musclepain,this.user.nausea,this.user.weakness
  ,this.user.dryskin,this.user.puffyface,this.user.eyepain,this.user.cold];
  
  for (let i = 0; i < this.syms.length; i++) {
    if (this.symtom[i]) {
      this.a.push(this.syms[i]);
      
    }
  }
  console.log(this.a)
  console.log(this.user);
  this.Subscription=this.Service.reads(this.a).subscribe(
    (data:any)=>{
      if(data){
       this.c=data.Result;
      
       this.a=[];

     console.log(this.c);

    if(data.Result.length==0){
this.c='select more symptoms to get accurate disease'
    }
this.predict=true;
this.show1=true;
      }
      else{
       alert("Can't read");
      }
          
  })}
  pop(){
    this.predict=false;
  }
  closeoverlay(e:any){
    if(e.target.classList.contains('overlay')){
      this.predict=false; 
    }
   }
   closepopup(){
    this.predict=false;
    this.show1=false;
   }
  push(){
if(this.symp !=''){
  this.c=[];
this.a.push(this.symp);
console.log(this.a);
this.symp='';
}
}
}

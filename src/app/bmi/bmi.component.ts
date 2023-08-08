import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
bmi={
  height:'',
  weight:''
}
status='';
show:boolean=false;
bmivalue=0;
bmical(){
  const height=Number(this.bmi.height);
  const weight =Number(this.bmi.weight)
this.bmivalue=(weight)/((height)*(height))*10000;
if(this.bmivalue<=18.4){
  this.status='Underweigth';
this.show=true;

}
else if(this.bmivalue > 18.5 && this.bmivalue < 24.9){
  this.status='Normal';
this.show=true;

}
else if(this.bmivalue > 25.0 && this.bmivalue < 29.9){
  this.status='OverWeight';
this.show=true;

}
else if(this.bmivalue > 30.0 && this.bmivalue < 34.9){
  this.status='Obese';
this.show=true;

}
else if(this.bmivalue >= 35.0){
  this.status='Extremely Obese';
this.show=true;

}
else if(this.bmivalue==0){
  this.show=false;
}
console.log(this.bmivalue);
}
}

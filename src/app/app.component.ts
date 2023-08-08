import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: Router){}

  title = 'csp';
  show1:boolean=false;
  register:boolean=false;
  Canshow:boolean=true;
  show:boolean=false;
  canshow:boolean=true;
  test:boolean=false;
 
  popup2(){
    this.show=true;
   }
  closepopup(){
   this.show=false;
   this.show1=false;
  }
  pop(){
    this.test=true;
    this.Canshow=false;
    this.show1=false;
    this.canshow=false;
  
  }
  doctorreg(){
    this.test=true;
    this.route.navigate(['/doctor']);
  }
  closeoverlay(e:any){
   if(e.target.classList.contains('overlay')){
     this.show=false; 
   }
  }
 popup3(){
  this.register=true;
  this.show1=true;
 }
 dregister(){
  this.test=true;
 }
 }

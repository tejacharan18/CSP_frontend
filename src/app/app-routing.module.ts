import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { MedicalComponent } from './medical/medical.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DietComponent } from './diet/diet.component';
import { DieseasepredComponent } from './dieseasepred/dieseasepred.component';
import { DeleteComponent } from './delete/delete.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ViewComponent } from './view/view.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Home2Component } from './home2/home2.component';
import { BmiComponent } from './bmi/bmi.component';

const routes: Routes = [
  
      {
        path:'doctorlogin',
        component:DoctorLoginComponent
      },
      
      {
        path:'doctor',
        component:MedicinesComponent
      },
      {
        path:'patient',
        component:PatientRegisterComponent
      },
      {
        path:'patientlogin',
        component:PatientLoginComponent
      },
      {
        path:'homepage',
        component:HomepageComponent
      },
      {
        path:'homee',
        component:Home2Component,
        children:[
          {
            path:'medicine',
            component:MedicinesComponent
          },
          {
            path:'read',
            component:ReadComponent
          },{
            path:'app',
            component:AppComponent
            },
          {
            path:'update',
            component:UpdateComponent
          },
          {
            path:'medical',
            component:MedicalComponent
          },
          {
            path:'precautions',
            component:PrecautionsComponent
          },
          {
            path:'bmi',
            component:BmiComponent
          },
          {
            path:'diet',
            component:DietComponent
          },
          {
            path:'dieseasepred',
            component:DieseasepredComponent
          },
          {
            path:'delete',
            component:DeleteComponent
          },
          {
            path:'contact',
            component:ContactusComponent
          },
          {
            path:'about',
            component:AboutusComponent
          },
          {
            path:'viewall',
            component:ViewComponent
          },
          {
            path:'homepage',
            component:HomepageComponent
          }
        ]
      },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'medicine',
        component:MedicinesComponent
      },
      {
        path:'bmi',
        component:BmiComponent
      },
      {
        path:'read',
        component:ReadComponent
      },{
        path:'app',
        component:AppComponent
        },
      {
        path:'update',
        component:UpdateComponent
      },
      {
        path:'medical',
        component:MedicalComponent
      },
      {
        path:'precautions',
        component:PrecautionsComponent
      },
      {
        path:'diet',
        component:DietComponent
      },
      {
        path:'dieseasepred',
        component:DieseasepredComponent
      },
      {
        path:'delete',
        component:DeleteComponent
      },
      {
        path:'contact',
        component:ContactusComponent
      },
      {
        path:'about',
        component:AboutusComponent
      },
      {
        path:'viewall',
        component:ViewComponent
      },
      {
        path:'homepage',
        component:HomepageComponent
      }
    ]
    
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

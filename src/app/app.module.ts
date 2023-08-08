import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DieseasepredComponent } from './dieseasepred/dieseasepred.component';
import { MedicalComponent } from './medical/medical.component';
import { DietComponent } from './diet/diet.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewComponent } from './view/view.component';
import { Home2Component } from './home2/home2.component';
import { BmiComponent } from './bmi/bmi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicinesComponent,
    DeleteComponent,
    ReadComponent,
    UpdateComponent,
    DieseasepredComponent,
    MedicalComponent,
    DietComponent,
    PrecautionsComponent,
    DoctorLoginComponent,
    ContactusComponent,
    AboutusComponent,
    PatientRegisterComponent,
    PatientLoginComponent,
    HomepageComponent,
    ViewComponent,
    Home2Component,
    BmiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

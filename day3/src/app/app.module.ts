import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,  ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { StudentsComponent } from './Components/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

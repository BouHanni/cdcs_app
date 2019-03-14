import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './login/user.service'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';    // add this

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule   
  ],
  providers: [UserService],   
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './home/users/users.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { AddUsersComponent } from './home/users/add-users/add-users.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { EditUserComponent } from './home/users/edit-user/edit-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsComponent } from './home/tasks/charts/charts.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsComponent } from './home/highcharts/highcharts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    TasksComponent,
    AddUsersComponent,
    NavbarComponent,
    EditUserComponent,
    ChartsComponent,
    HighchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, FontAwesomeModule,
    ChartModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

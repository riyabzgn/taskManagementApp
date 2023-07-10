import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './home/tasks/tasks.component';
import { UsersComponent } from './home/users/users.component';
import { AddUsersComponent } from './home/users/add-users/add-users.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { EditUserComponent } from './home/users/edit-user/edit-user.component';
import { HighchartsComponent } from './home/highcharts/highcharts.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'add-users', component: AddUsersComponent},
  { path: 'navbar', component:NavbarComponent},
  { path: 'edit-user/:id', component:EditUserComponent},
  { path: 'highcharts', component: HighchartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

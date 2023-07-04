import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  isLoggedIn= true;

  addUsers(){
    this.router.navigate(['add-users']);
  }
  formValue: any[]= [];


  constructor(private router: Router, private dataservice: DataService){
    this.formValue= this.dataservice.getFormValue();
    console.log(this.formValue);
  }
}


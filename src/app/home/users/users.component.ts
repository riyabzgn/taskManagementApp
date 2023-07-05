import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

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
  // values: formValue[]=[];


  deleteUser(index: number){
    this.formValue.splice(index, 1);
  }

  editUser(empId: number){
    console.log('Check index ---->', empId)
    this.router.navigate([`/edit-user/${empId}`]);
  }

  constructor(private router: Router, private dataservice: DataService){
    this.formValue= this.dataservice.getFormValue();
    // if(this.editUser()){
    //   this.formValue= this.dataservice.updateFormValue();

    // }
    console.log(this.formValue);
  }
}

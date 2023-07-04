import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {

  isLoggedIn= true;

  users= this.fb.group({
    emp: [''],
    name: [''],
    email: [''],
    dob: ['']
  })

  // gender: ['', [Validators.required]] 
  
  array: any[]= [];
  addU(){
    const formData: any[]=[];

    Object.keys(this.users.controls).forEach(controlName=>{
      const control= this.users.get(controlName);
      if(control){
        this.array.push({
          label: controlName,
          value: control.value
        })
      }
    })
    console.log(this.array);
    this.dataservice.setFormValue(this.array);
    this.router.navigate(['users']);
  }



  constructor(private fb: FormBuilder, private dataservice: DataService, private router: Router){}


}

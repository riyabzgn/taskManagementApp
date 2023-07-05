import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {

  isLoggedIn= true;

  isSubmitted= false;
  users= this.fb.group({
    emp: ['',[Validators.required]],
    name: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    dob: ['',[Validators.required]]
  })

  // gender: ['', [Validators.required]] 
  addU(){
    const formData: any[]=[];

    if (this.users.invalid) return;
  
    this.isSubmitted= true;

    const user = {
      emp: this.users.get('emp')?.value,
      name: this.users.get('name')?.value,
      email: this.users.get('email')?.value,
      dob: this.users.get('dob')?.value
    };
    console.log(user);
    this.dataservice.setFormValue(user);
    this.router.navigate(['users']);
  }



  constructor(private fb: FormBuilder, private dataservice: DataService, private router: Router){}


}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit{

  isLoggedIn= true;

  isSubmitted= false;
  users= this.fb.group({
    emp: ['',[Validators.required]],
    name: ['',[Validators.required]],
    email: this.fb.array([
      this.fb.control('')
    ]),
    phNo: ['', [this.phoneValidator()]],
    dob: ['',[Validators.required]]
  })

  constructor(private fb: FormBuilder, private dataservice: DataService, private router: Router){}

  ngOnInit(){
  }

  addU(){
    const formData: any[]=[];

    if (this.users.invalid) return;
  
    this.isSubmitted= true;

    const user = {
      emp: this.users.get('emp')?.value,
      name: this.users.get('name')?.value,
      email: this.users.get('email')?.value,
      phNo: this.users.get('phNo')?.value,
      dob: this.users.get('dob')?.value
    };
    console.log(user);
    console.log("emails check-->", this.emails.value);

    this.dataservice.setFormValue(user);
    this.router.navigate(['users']);

  }

  get emails(){
    return this.users.get('email') as unknown as FormArray;
  }

  addEmails(){
    this.emails.push(this.fb.control(''));
  }

  deleteEmails(index:number): void{
    this.emails.removeAt(index);
  }
  
  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const phoneNumber = control.value;
      const isValid = /^\+\d{1,3}\d{10}$/.test(phoneNumber);
      return isValid ? null : { phoneInvalid: true };
    };
  }



}

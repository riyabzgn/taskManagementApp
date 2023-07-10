import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormControl,  ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../data.service';
// import { ArrayValidators } from './array.validator';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  // index: number =1;
  id!: any;
  isSubmitted= false;
  users= this.fb.group({
    emp: ['',[Validators.required]],
    name: ['',[Validators.required]],
    // email: ['',[Validators.required, Validators.email]],
    email: this.fb.array([
      this.fb.control('')]),
    phNo: ['', [this.phoneValidator()]],
    dob: ['',[Validators.required]]
  })

  constructor(private fb: FormBuilder, private dataservice: DataService, private router: Router, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Check index -->', this.id)
    this.users.get('phNo')?.setValue('+9779000000012');
  }

  get emails(){
    return this.users.get('email') as unknown as FormArray;
  }

  addEmails(){
    this.emails.push(this.fb.control(''));
  }

  deleteEmails(index: number){
      this.emails.removeAt(index);

    }

  user: any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.user = this.dataservice.getFormValue().find((user: any) => user.emp === id);
    if (this.user) {
      this.users.patchValue({
        emp: this.user.emp,
        name: this.user.name,
        email: this.user.email,
        phNo: this.user.phNo,
        dob: this.user.dob
      });
    }
    console.log('HELLLLLLLLOOOOOO')
  }
  

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const phoneNumber = control.value;
      const isValid = /^\+\d{1,3}\d{10}$/.test(phoneNumber);
      return isValid ? null : { phoneInvalid: true };
    };
  }
  
  UpdateU() {
    this.isSubmitted = true;

    if (this.users.invalid){ return;}
    
  
    if (this.user) {
      this.user.name = this.users.get('name')?.value;
      this.user.email = this.users.get('email')?.value;
      this.user.phNo = this.users.get('phNo')?.value;
      this.user.dob = this.users.get('dob')?.value;
  
      this.dataservice.updateUser(this.user); // Assuming you have a method named 'updateUser' in the DataService to update the user data
    }
  
    this.router.navigate(['users']);
  }
}

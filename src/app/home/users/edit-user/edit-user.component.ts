import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  index: number =1;
  id!: any;
  isSubmitted= false;
  users= this.fb.group({
    emp: ['',[Validators.required]],
    name: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    dob: ['',[Validators.required]]
  })

  constructor(private fb: FormBuilder, private dataservice: DataService, private router: Router, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id')
    console.log('Check index -->', this.id)
  }

  // ngOnInit(): void{
    // this.userID= +params['index'];
    // const user= this.dataservice.getFormValue().find(user) => user.id ===this.userID;
  // }
  user: any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.user = this.dataservice.getFormValue().find((user: any) => user.emp === id);
    if (this.user) {
      this.users.patchValue({
        emp: this.user.emp,
        name: this.user.name,
        email: this.user.email,
        dob: this.user.dob
      });
    }
  }
  

  
  UpdateU() {
    if (this.users.invalid) return;
    
    this.isSubmitted = true;
  
    if (this.user) {
      this.user.name = this.users.get('name')?.value;
      this.user.email = this.users.get('email')?.value;
      this.user.dob = this.users.get('dob')?.value;
  
      this.dataservice.updateUser(this.user); // Assuming you have a method named 'updateUser' in the DataService to update the user data
    }
  
    this.router.navigate(['users']);
  }
  
  // gender: ['', [Validators.required]] 
  // UpdateU(){
  //   const formData: any[]=[];

  //   if (this.users.invalid) return;
  
  //   this.isSubmitted= true;

  //   if(this.users.get('emp').value=id){
  //   this.users.patchValue({
  //     emp: this.users.get('emp')?.value,
  //     name: this.users.get('name')?.value,
  //     email: this.users.get('email')?.value,
  //     dob: this.users.get('dob')?.value
  //   });
  // }
  //   // const user = {
  //   //   emp: this.users.get('emp')?.value,
  //   //   name: this.users.get('name')?.value,
  //   //   email: this.users.get('email')?.value,
  //   //   dob: this.users.get('dob')?.value
  //   // };
  //   console.log("this is new array called user",this.users.value);
  //   this.dataservice.setFormValue(this.users);
  //   this.router.navigate(['users']);
  // }


}

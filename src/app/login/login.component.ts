import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm= this.fb.group({
    email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    password:['',[Validators.required, this.passwordValidator()]]
  })

  isSubmitted=false;

  passwordValidator(): ValidatorFn{
    return (control: AbstractControl): { [key:string]: any} | null=>{

      const password = control.value;
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);

      const isValid =
        hasNumber && hasSpecialChar && hasUpperCase && hasLowerCase && password.length >= 8;

      return isValid ? null : { passwordInvalid: true };    
    };

  }

  login(){
    console.log(this.loginForm.get('email')?.value);
    console.log(this.loginForm.get('password')?.value);
    this.isSubmitted=true;
    if(this.loginForm.valid){
      this.router.navigate(['home']);
    }
  }

  constructor(private fb: FormBuilder, private router: Router){}

}

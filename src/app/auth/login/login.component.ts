import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router'
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  usernameFormControl = new FormControl('',[
    Validators.required
  ])
  passwordFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])
  matcher = new MyErrorStateMatcher();
  signIn(){
    if(this.usernameFormControl.valid && this.passwordFormControl.valid){
      this.router.navigate(['dashboard'])
    }
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { checkEmail, checkPassword } from './loginvalues';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StateService } from '../state.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})

 
export class LoginFormComponent implements OnInit {
  ReactiveForm:any;

  constructor(private fb: FormBuilder,private route:Router,private ser:StateService) {}

  ngOnInit() {
    this.ReactiveForm = this.fb.group({
      email: ["", [Validators.required, checkEmail(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ["", [Validators.required, checkPassword(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    });
  }

  onSubmit() {
   
    const mail = this.ReactiveForm.get('email')?.value;
    const pass = this.ReactiveForm.get('password')?.value;
    if(mail === "sivareddypuli1@gmail.com" && pass === "Siva@it96") {
      localStorage.setItem("mail", mail);
      localStorage.setItem("password", pass);
      localStorage.setItem("islogin","true");
      this.ser.setLogin(true);
      alert("login passed");
      this.route.navigate(['/']);
    } else {
      alert("Invalid credentials");
    }
  }
}

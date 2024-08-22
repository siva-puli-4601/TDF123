import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormArray, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckUsername } from '../app.customvalidator'; 
import { CheckPassword } from '../app.passwordvalid';
import { HeaderComponent } from '../header/header.component';
// import { subscribe } from 'diagnostics_channel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet, CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  title = "hello";
  reactiveform: any;
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.reactiveform = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), CheckUsername(/^[a-zA-Z0-9_-]{3,16}$/)]],
      password: [''],
      conformpass: [''],
      address: this.fb.group({
        city: [''],
        country: [''],
        pincode: ['']
      }),
      email:[""],
      subscribe:[""],
      alternateArrays:this.fb.array([]) as FormArray,
    }
    ,{validator:CheckPassword()});


    this.reactiveform.get("subscribe").valueChanges
    .subscribe((checked: any)=>
    {
      const email=this.reactiveform.get("email");
      if(checked)
      {
        email.setValidators([Validators.required]);
      }
      else
      {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    }
    )
  }

  alternativeMails()
  {
    this.reactiveform.get('alternateArrays').push(this.fb.control(""));
  }
  deleteMail()
  {
    const arr=this.reactiveform.get('alternateArrays') as FormArray;
    if(arr.length>0)
      arr.removeAt(arr.length - 1);
  }
  



  assignData() {
    this.reactiveform.setValue({
      username: 'Siva',
      password: 'siva@it96',
      conformpass: 'siva@it96',
      address: {
        city: 'Bangalore',
        country: 'India',
        pincode: '560001'
      },
      email:"sivareddypuli1@gmail.com",
      subscribe:false
    });
  }

  
  someData() {
    this.reactiveform.patchValue({
      username: 'Siva',
      password: 'siva@it96',
      conformpass: 'siva@it96',
    });
  }

  onSubmit() {
    console.log(this.reactiveform.value);
  } 
}


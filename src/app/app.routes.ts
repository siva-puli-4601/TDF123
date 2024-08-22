import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import path from 'path';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginFormComponent},
    {path:"regis", component:RegistrationComponent}
];

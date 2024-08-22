import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
login=false;
  constructor() { }
  setLogin(value:boolean) 
  {
    this.login=value;
  }
  getLogin():boolean
  {
    return this.login;
  }
}

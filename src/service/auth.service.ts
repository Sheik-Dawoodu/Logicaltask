import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logInValue:boolean=false;
  
  login(){
      this.logInValue=true;
      localStorage.setItem('islogedin',JSON.stringify(this.logInValue))
  }
  logOut(){
    this.logInValue=false
    localStorage.setItem('islogedin',JSON.stringify(this.logInValue));
  }
  isAuthandication(){
  //  return this.logInValue;
   return JSON.parse(localStorage.getItem('islogedin')!)
  }
}
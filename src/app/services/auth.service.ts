import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private fAuth: AngularFireAuth) {
    this.user = fAuth.authState;
  }
  loginUser(
    email:string,
    password:string
  ):Promise<any> {
    return this.fAuth.auth.signInWithEmailAndPassword(email,password);
  }
  signUpUser(
    email:string,
    password:string
  ){
    return this.fAuth.auth.createUserWithEmailAndPassword(email,password);
  }
  resetPassword(email:string):Promise<void>{
    return this.fAuth.auth.sendPasswordResetEmail(email);
  }
  logOut():Promise<void>{
    return this.fAuth.auth.signOut();
  }
}
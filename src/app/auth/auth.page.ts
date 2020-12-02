import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  authId:any;
  authPassword:any;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  authLogin(){
    if(this.authId === "student" || this.authId === "parent"){
      this.router.navigate([this.authId]);
    }
  }

}

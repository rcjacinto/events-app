import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.page.html',
  styleUrls: ['./register-student.page.scss'],
})
export class RegisterStudentPage implements OnInit {
  user: User = {
    idNumber:null,
    id: null,
    name: {
      first: null,
      last: null,
      mi: null,
    },
    gender: null,
    dob: null,
    address: null,
    mobile: null,
    email: null,
    image: null,
    role: 1,
    date: {
      created: Date(),
      modified: Date(),
    },
    status: null,
  };
  enPass:any = {
    mPassword: null,
    cPassword: null,
  }
  constructor(
    private auth:AuthService,
    private userService:UserService,
  ) { }

  ngOnInit() {

  }
  createAccount(){
    console.log(this.user);
    if(this.enPass.mPassword === this.enPass.cPassword){
      this.auth.signUpUser(this.user.email,this.enPass.mPassword).then(res=>{
        this.userService.createUser(this.user).then(res=>{
          this.user.id = res.id
            this.userService.updateUser(this.user).then(res=>{
              console.log(res);
            });
        })
      }).catch(err=>{
        console.log(err);
      })
    }
  }

}

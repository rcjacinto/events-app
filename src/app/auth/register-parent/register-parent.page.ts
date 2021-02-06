import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register-parent',
  templateUrl: './register-parent.page.html',
  styleUrls: ['./register-parent.page.scss'],
})
export class RegisterParentPage implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}

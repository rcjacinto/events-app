import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss'],
})
export class StudentHeaderComponent implements OnInit {

  @Input() title: string;
  userInfo:User;
  constructor(
    private menu: MenuController,
    public router:Router,
    private auth:AuthService,
    private user:UserService
  ) {
    this.userInfo = user.userInfo;
   }
  openStudentMenu() {
    this.menu.enable(true, 'studentMenu');
    this.menu.open('studentMenu');
  }
  signOut(){
    this.auth.logOut();
    this.router.navigate(['auth']);
  }

  ngOnInit() {}

}

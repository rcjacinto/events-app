import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  @Input() title: string;
  constructor(
    public menu:MenuController,
    public router:Router,
    private auth:AuthService
  ) { }

  ngOnInit() {}
  openAdminMenu() {
    this.menu.enable(true, 'parent-menu');
    this.menu.open('parent-menu');
  }
  signOut(){
    this.auth.logOut();
    this.router.navigate(['']);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss'],
})
export class StudentHeaderComponent implements OnInit {

  @Input() title: string;
  constructor(
    private menu: MenuController,
    public router:Router
  ) { }
  openStudentMenu() {
    this.menu.enable(true, 'studentMenu');
    this.menu.open('studentMenu');
  }
  signOut(){
    this.router.navigate(['auth']);
  }

  ngOnInit() {}

}

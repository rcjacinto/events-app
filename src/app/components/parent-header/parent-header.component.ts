import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-parent-header',
  templateUrl: './parent-header.component.html',
  styleUrls: ['./parent-header.component.scss'],
})
export class ParentHeaderComponent implements OnInit {
  @Input() title: string;
  constructor(
    public menu:MenuController,
    public router:Router
  ) { }
  openParentMenu() {
    this.menu.enable(true, 'parent-menu');
    this.menu.open('parent-menu');
  }
  signOut(){
    this.router.navigate(['auth']);
  }

  ngOnInit() {}

}

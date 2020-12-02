import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss'],
})
export class StudentHeaderComponent implements OnInit {

  @Input() title: string;
  constructor(
    private menu: MenuController
  ) { }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {}

}

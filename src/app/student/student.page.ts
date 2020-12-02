import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  selectedTab:any;
  constructor() { }

  ngOnInit() {
  }
  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    this.selectedTab = this.selectedTab.replace("-"," ");
  }
}

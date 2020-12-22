import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  selectedTab:any;
  pageTitle:any = null;
  
  constructor() { }

  ngOnInit() {
  }
  setCurrentTab() {
    this.pageTitle = this.tabs.getSelected();
    this.pageTitle = this.pageTitle.replace("-"," ");
  }

}

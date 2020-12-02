import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {
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

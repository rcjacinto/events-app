import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsEventsPageRoutingModule } from './news-events-routing.module';

import { NewsEventsPage } from './news-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsEventsPageRoutingModule
  ],
  declarations: [NewsEventsPage]
})
export class NewsEventsPageModule {}

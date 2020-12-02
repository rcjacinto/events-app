import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsEventsPageRoutingModule } from './news-events-routing.module';

import { NewsEventsPage } from './news-events.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsEventsPageRoutingModule,
    ComponentsModule,
    CalendarModule
  ],
  declarations: [NewsEventsPage]
})
export class NewsEventsPageModule {}

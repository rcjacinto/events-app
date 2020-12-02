import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    ComponentsModule,
    CalendarModule
  ],
  declarations: [EventsPage]
})
export class EventsPageModule {}

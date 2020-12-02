import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  date: string[] = [];
  type: 'string';
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    color: 'secondary'
  };
  constructor() { 
    for (let index = 1; index < 4; index++) {
      let m = Math.floor(Math.random() * 21) + index;
      this.date.push('2020-12-0'+ m);
    }
    console.log(this.date);
  }

  ngOnInit() {
  }

}

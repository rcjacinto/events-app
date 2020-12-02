import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.page.html',
  styleUrls: ['./news-events.page.scss'],
})
export class NewsEventsPage implements OnInit {
  date: string[] = [];
  type: 'string';
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    color: 'secondary'
  };
  
  items:any = [];
  selection:any = 
    { name:"Lorem Ipsum",
      desc: "dolor Set Amet",
      img: null,
      info: "ero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"};
  
  constructor() { 
    for (let index = 1; index < 4; index++) {
      let m = Math.floor(Math.random() * 21) + index;
      this.date.push('2020-12-0'+ m);
    }
    console.log(this.date);
  }
  
  ngOnInit() {
    this.getRandomValues();
  }
  getRandomValues(){
    let i = 0;
    for (let index = 0; index < 5; index++) {
      i = Math.floor((Math.random() * 3) + 1);
      this.selection.img = `../assets/img/random/${i}.jpg`;
        this.items.push(this.selection);
    }
    console.log(this.items);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.page.html',
  styleUrls: ['./news-events.page.scss'],
})
export class NewsEventsPage implements OnInit {

  newsItems:any = [];
  constructor() { }
  ngOnInit(){
  }

  ionViewDidEnter() {
    this.newsItems = [];
    this.newPost();
  }
  newPost(){
    for (let index = 10; index > 1; index--) {
      let i = Math.floor((Math.random() * 3) + 1);
      this.newsItems.push(
        {
          title:"Lorem Ipsum dolor set Amet",
          desc: "Lorem Ipsum dolor set Amet",
          type: "Event",
          date: Date(),
          featuredImage:`../assets/img/random/${i}.jpg`
        });
    }
    console.log(this.newsItems);
  }

}

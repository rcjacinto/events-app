import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminModalNewsComponent } from 'src/app/components/admin-modal-news/admin-modal-news.component';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.page.html',
  styleUrls: ['./news-events.page.scss'],
})
export class NewsEventsPage implements OnInit {

  newsItems:any = [];
  constructor(
    public modal:ModalController
  ) { }
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
  }
  
  async newsModal(info:any){
    const modal = await this.modal.create({
      component: AdminModalNewsComponent,
      cssClass: 'my-custom-class',
      componentProps:{
        'userInfo': info
      }
    });
    return await modal.present();
  }

}

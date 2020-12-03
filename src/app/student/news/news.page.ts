import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalViewComponent } from 'src/app/components/modal-view/modal-view.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  items:any = [];
  selection:any = 
    { name:"Lorem Ipsum",
      desc: "dolor Set Amet",
      img: null,
      info: "ero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"};
  
  constructor(
    public modal:ModalController
  ) { }

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
  async viewDetails(info){
    console.log(info,'view');
    const modal = await this.modal.create({
      component: ModalViewComponent,
      cssClass: 'my-custom-class',
      componentProps:{
        'newsData': info
      }
    });
    return await modal.present();
  }
}

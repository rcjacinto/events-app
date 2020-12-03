import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StudentProfileComponent } from 'src/app/components/student-profile/student-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public modal:ModalController
  ) { }

  ngOnInit() {
  }
  async editProfile(info){
    const modal = await this.modal.create({
      component: StudentProfileComponent,
      cssClass: 'my-custom-class',
      componentProps:{
        'newsData': info
      }
    });
    return await modal.present();
  }
}

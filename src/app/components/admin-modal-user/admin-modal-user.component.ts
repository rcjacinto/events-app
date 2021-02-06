import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin-modal-user',
  templateUrl: './admin-modal-user.component.html',
  styleUrls: ['./admin-modal-user.component.scss'],
})
export class AdminModalUserComponent implements OnInit {
  @Input() userInfo: User;
  constructor(
    public modal:ModalController
  ) { 
  }

  ngOnInit() {
    if(!this.userInfo){
      let newUser : User = {
        idNumber:null,
        id: null,
        name: {
          first: null,
          last: null,
          mi: null,
        },
        gender: null,
        dob: null,
        address: null,
        mobile: null,
        email: null,
        image: null,
        role: 1,
        date: {
          created: Date(),
          modified: Date(),
        },
        status: null,
      };
      this.userInfo = newUser;
    }
    console.log(this.userInfo);
  }
  closeModal() {
    this.modal.dismiss();
  }

}

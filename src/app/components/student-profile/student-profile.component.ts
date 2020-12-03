import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  @Input() id: string;
  constructor(
    public modal:ModalController
  ) { }

  ngOnInit() {}
  closeModal() {
    this.modal.dismiss();
  }
}

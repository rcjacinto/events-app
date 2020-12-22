import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss'],
})
export class ModalViewComponent implements OnInit {
  @Input() newsData: any;

  constructor(
    public modal:ModalController
  ) { 
  }

  ngOnInit() {}
  closeModal() {
    this.modal.dismiss();
  }
}

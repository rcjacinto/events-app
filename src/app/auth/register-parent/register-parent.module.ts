import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterParentPageRoutingModule } from './register-parent-routing.module';

import { RegisterParentPage } from './register-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterParentPageRoutingModule
  ],
  declarations: [RegisterParentPage]
})
export class RegisterParentPageModule {}

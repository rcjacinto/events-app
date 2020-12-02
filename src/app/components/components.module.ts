import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [StudentHeaderComponent],
  imports: [IonicModule,
    CommonModule
  ],
  exports:[StudentHeaderComponent]
})
export class ComponentsModule { }

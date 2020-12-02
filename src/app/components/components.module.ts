import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { IonicModule } from '@ionic/angular';
import { ParentHeaderComponent } from './parent-header/parent-header.component';



@NgModule({
  declarations: [StudentHeaderComponent,ParentHeaderComponent],
  imports: [IonicModule,
    CommonModule
  ],
  exports:[StudentHeaderComponent,ParentHeaderComponent]
})
export class ComponentsModule { }

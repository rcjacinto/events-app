import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { IonicModule } from '@ionic/angular';
import { ParentHeaderComponent } from './parent-header/parent-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminModalUserComponent } from './admin-modal-user/admin-modal-user.component';
import { AdminModalNewsComponent } from './admin-modal-news/admin-modal-news.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StudentHeaderComponent,ParentHeaderComponent,AdminHeaderComponent,AdminModalUserComponent,AdminModalNewsComponent],
  imports: [IonicModule,
    CommonModule,FormsModule
  ],
  exports:[StudentHeaderComponent,ParentHeaderComponent,AdminHeaderComponent,AdminModalUserComponent,AdminModalNewsComponent]
})
export class ComponentsModule { }

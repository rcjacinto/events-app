import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterParentPage } from './register-parent.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterParentPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'register-student',
    loadChildren: () => import('./register-student/register-student.module').then( m => m.RegisterStudentPageModule)
  },
  {
    path: 'register-parent',
    loadChildren: () => import('./register-parent/register-parent.module').then( m => m.RegisterParentPageModule)
  },
  {
    path: 'register-teacher',
    loadChildren: () => import('./register-teacher/register-teacher.module').then( m => m.RegisterTeacherPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}

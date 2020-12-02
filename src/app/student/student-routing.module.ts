import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: 'student',
    component: StudentPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/student/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/student/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}

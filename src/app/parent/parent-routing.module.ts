import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentPage } from './parent.page';

const routes: Routes = [
  {
    path: '',
    component: ParentPage,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'news-events',
        loadChildren: () => import('./news-events/news-events.module').then( m => m.NewsEventsPageModule)
      },
      {
        path: '',
        redirectTo: '/parent/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/parent/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentPageRoutingModule {}

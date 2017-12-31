import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'work',
    loadChildren: './work/work.module#WorkModule'
  },
  { path: '**', redirectTo: '' }
];

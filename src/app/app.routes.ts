import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./forms-app/forms-app-routing.module').then(m => m.AppRoutingModule) },
];

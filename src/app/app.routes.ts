import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./forms-app/forms-app.module').then(m => m.AppModule) },
];

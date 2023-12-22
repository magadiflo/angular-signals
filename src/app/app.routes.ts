import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'signals',
    loadChildren: () => import('./signals/signals.routes'),
  },
  {
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.routes'),
  },
  { path: '**', redirectTo: 'signals' },
];

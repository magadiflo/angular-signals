import { Routes } from "@angular/router";

export default [
  {
    path: '',
    children: [
      {
        path: 'kinds',
        loadComponent: () => import('./kinds/kinds.component').then(c => c.KindsComponent),
      },
      { path: '**', redirectTo: 'kinds', },
    ]
  }
] as Routes;

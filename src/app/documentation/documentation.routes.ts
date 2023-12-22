import { Routes } from "@angular/router";

export default [
  {
    path: '',
    children: [
      {
        path: 'kinds',
        loadComponent: () => import('./kinds/kinds.component').then(c => c.KindsComponent),
      },
      {
        path: 'effects',
        loadComponent: () => import('./effects/effects.component').then(c => c.EffectsComponent),
      },
      { path: '**', redirectTo: 'kinds', },
    ]
  }
] as Routes;

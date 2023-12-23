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
      {
        path: 'rxjs-interop-for-signals',
        loadComponent: () => import('./rxjs-interop-for-signals/rxjs-interop-for-signals.component').then(c => c.RxjsInteropForSignalsComponent),
      },
      { path: '**', redirectTo: 'kinds', },
    ]
  }
] as Routes;

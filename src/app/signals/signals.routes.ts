import { Routes } from "@angular/router";

export default [
  {
    path: '',
    children: [
      {
        path: 'crud',
        loadComponent: () => import('./crud/crud.component').then(c => c.CrudComponent),
      },
      { path: '**', redirectTo: 'crud', },
    ]
  }
] as Routes;

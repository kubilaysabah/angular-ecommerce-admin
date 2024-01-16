import { Routes, PreloadAllModules } from '@angular/router'

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authDeactivateGuard } from './guards/auth-deactivate.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () =>
      import('./pages/splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
    canActivate: [authGuard],
    canDeactivate: [authDeactivateGuard],
  },
  {
    path: 'facil',
    loadComponent: () => import('./components/facil/facil.page').then( m => m.FacilPage)
  },
  {
    path: 'medio',
    loadComponent: () => import('./components/medio/medio.page').then( m => m.MedioPage)
  },
  {
    path: 'dificil',
    loadComponent: () => import('./components/dificil/dificil.page').then( m => m.DificilPage)
  },
  {
    path: 'juego',
    loadComponent: () => import('./components/juego/juego.page').then( m => m.JuegoPage)
  },
];

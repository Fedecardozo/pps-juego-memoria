import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authDeactivateGuard } from './guards/auth-deactivate.guard';
import { backGuard } from './guards/back.guard';

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
    loadComponent: () =>
      import('./components/facil/facil.page').then((m) => m.FacilPage),
    canDeactivate: [backGuard],
  },
  {
    path: 'medio',
    loadComponent: () =>
      import('./components/medio/medio.page').then((m) => m.MedioPage),
    canDeactivate: [backGuard],
  },
  {
    path: 'dificil',
    loadComponent: () =>
      import('./components/dificil/dificil.page').then((m) => m.DificilPage),
    canDeactivate: [backGuard],
  },
  {
    path: 'juego',
    loadComponent: () =>
      import('./components/juego/juego.page').then((m) => m.JuegoPage),
  },
  {
    path: 'ranking',
    loadComponent: () =>
      import('./pages/ranking/ranking.page').then((m) => m.RankingPage),
  },
  {
    path: 'list-dificil',
    loadComponent: () => import('./pages/ranking/list-dificil/list-dificil.page').then( m => m.ListDificilPage)
  },
  {
    path: 'list-facil',
    loadComponent: () => import('./pages/ranking/list-facil/list-facil.page').then( m => m.ListFacilPage)
  },
  {
    path: 'list-medio',
    loadComponent: () => import('./pages/ranking/list-medio/list-medio.page').then( m => m.ListMedioPage)
  },
];

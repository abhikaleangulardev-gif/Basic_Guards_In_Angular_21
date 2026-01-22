import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'dashboard', loadComponent: () => import('./component/dashboard/dashboard').then((c) => c.Dashboard),
    canActivate:[authGuard],
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./component/home/home').then((c) => c.Home) },
      { path: 'about', loadComponent: () => import('./component/about/about').then((c) => c.About) },
      { path: 'product', loadComponent: () => import('./component/product/product').then((c) => c.Product) },
      { path: 'contact', loadComponent: () => import('./component/contact/contact').then((c) => c.Contact) },
    ]
  }
];

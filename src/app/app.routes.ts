import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Explore } from './pages/explore/explore';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  {
    path: 'explore',
    component: Home,
    children: [
      {
        path: '',
        component: Explore,
      },
    ],
  },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: '**', redirectTo: 'explore' },
];

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Explore } from './pages/explore/explore';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Layout } from './components/layout/layout';
import { Bookmark } from './pages/bookmark/bookmark';
import { Edit } from './pages/profile/edit/edit';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'explore',
        component: Explore,
      },
      {
        path: 'bookmark',
        component: Bookmark,
      },
      {
        path: 'profile',
        children: [
          { path: '', component: Profile },
          { path: 'edit/:usuarioId', component: Edit },
        ],
      },
    ],
  },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: '**', redirectTo: 'explore' },
];

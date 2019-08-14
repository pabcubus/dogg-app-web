import { RouterModule, Routes } from '@angular/router';

import { EncuentrameComponent } from './screens/encuentrame/encuentrame.component';
import { HomeComponent } from './screens/home/home.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { LoginComponent } from './screens/login/login.component';

import { CanActivateRouteGuard } from './shared/guards/can-activate-route.guard'

const app_routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: 'encuentrame',
    component: EncuentrameComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: '/login' }
];

export const app_routing = RouterModule.forRoot(app_routes);

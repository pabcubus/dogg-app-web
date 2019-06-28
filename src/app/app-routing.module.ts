import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { ProfileComponent } from './screens/profile/profile.component';

import { CanActivateRouteGuard } from './shared/guards/can-activate-route.guard'

const app_routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [CanActivateRouteGuard]
  },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);

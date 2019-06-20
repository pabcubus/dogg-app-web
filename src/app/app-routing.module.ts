import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { ProfileComponent } from './screens/profile/profile.component';

const app_routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
/*
import { ScreensModule } from './screens/screens.module';

const screensModule = new ScreensModule();

const app_routes: Routes = [
  { path: 'profile', component: screensModule.getProfile() },
  { path: 'home', component: screensModule.getHome() },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
*/
export const app_routing = RouterModule.forRoot(app_routes);

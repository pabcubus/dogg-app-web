import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const modules: Array<any> = [
  HomeComponent,
  ProfileComponent,
  LoginComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...modules],
  schemas: []
})
export class ScreensModule { }

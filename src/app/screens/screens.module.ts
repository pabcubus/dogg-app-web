import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeComponentsModule } from '../shared/materializecomponents.module';

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
    MaterializeComponentsModule,
  ],
  declarations: [...modules],
  schemas: []
})
export class ScreensModule { }

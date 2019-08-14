import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeComponentsModule } from '../shared/materializecomponents.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EncuentrameComponent } from './encuentrame/encuentrame.component';

const modules: Array<any> = [
  EncuentrameComponent,
  HomeComponent,
  ProfileComponent,
  LoginComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterializeComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...modules],
  schemas: []
})
export class ScreensModule { }

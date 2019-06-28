import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const modules: Array<any> = [
  HomeComponent,
  ProfileComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...modules],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ScreensModule { }

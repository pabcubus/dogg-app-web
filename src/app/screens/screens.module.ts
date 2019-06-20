import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const modules: Array<any> = [
  HomeComponent,
  ProfileComponent
];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [...modules],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ScreensModule { }

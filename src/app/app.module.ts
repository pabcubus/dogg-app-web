import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MaterialModule } from './screens/material.module';
import { app_routing } from './app-routing.module';

import { ScreensModule } from './screens/screens.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    BrowserModule,
    ScreensModule,
    app_routing
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

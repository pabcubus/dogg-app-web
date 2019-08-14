import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { app_routing } from './app-routing.module';

import { ScreensModule } from './screens/screens.module';
import { SharedModule } from './shared/shared.module';
import { MaterializeComponentsModule } from './shared/materializecomponents.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ScreensModule,
    SharedModule,
    ServicesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterializeComponentsModule,
    app_routing
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }

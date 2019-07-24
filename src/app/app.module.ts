import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { app_routing } from './app-routing.module';

import { ScreensModule } from './screens/screens.module';
import { SharedModule } from './shared/shared.module';
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
    app_routing
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }

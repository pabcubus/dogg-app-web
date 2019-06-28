import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanActivateRouteGuard } from './guards/can-activate-route.guard'

//import { GuardsModule } from './guards/guards.module';

@NgModule({
  imports: [
    CommonModule,
    // GuardsModule,
  ],
  declarations: [],
  providers: [CanActivateRouteGuard],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }

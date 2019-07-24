import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanActivateRouteGuard } from './guards/can-activate-route.guard';

//import { GuardsModule } from './guards/guards.module';

@NgModule({
  imports: [
    CommonModule,
    // GuardsModule,
  ],
  exports: [],
  declarations: [],
  providers: [CanActivateRouteGuard],
  schemas: []
})
export class SharedModule { }

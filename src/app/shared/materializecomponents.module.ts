import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSidenavModule,
    MzNavbarModule,
    MzModalModule
  } from 'ngx-materialize';

const materializeModules = [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSidenavModule,
    MzNavbarModule,
    MzModalModule
];

@NgModule({
    imports: [
    ...materializeModules,
    CommonModule,
    ],
    exports: [
    ...materializeModules
    ]
})
export class MaterializeComponentsModule {}
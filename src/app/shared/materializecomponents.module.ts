import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSidenavModule,
    MzNavbarModule
  } from 'ngx-materialize';

const materializeModules = [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSidenavModule,
    MzNavbarModule
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
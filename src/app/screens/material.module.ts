import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules: Array<any> = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  FlexLayoutModule
];

@NgModule({
  imports: [...modules],
  exports : [...modules]
})
export class MaterialModule { }

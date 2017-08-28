import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

import { WorksheetComponent } from './worksheet.component';

@NgModule({
  imports: [
    CommonModule,
    WjGridSheetModule
  ],
  declarations: [ WorksheetComponent ],
  providers: [],
  exports: [ WorksheetComponent ]
})
export class WorksheetModule { }

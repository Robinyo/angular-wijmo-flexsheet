import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

import { PaletteComponent } from './palette.component';

@NgModule({
  imports: [
    CommonModule,
    WjGridSheetModule
  ],
  declarations: [ PaletteComponent ],
  providers: [ ],
  exports: [ PaletteComponent ]
})
export class PaletteModule { }

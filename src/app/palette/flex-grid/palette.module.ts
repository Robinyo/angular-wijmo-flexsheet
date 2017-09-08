import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridDetailModule } from 'wijmo/wijmo.angular2.grid.detail';

import { PaletteComponent } from './palette.component';

@NgModule({
  imports: [
    CommonModule,
    WjGridModule,
    WjGridDetailModule
  ],
  declarations: [ PaletteComponent ],
  providers: [ ],
  exports: [ PaletteComponent ]
})
export class PaletteModule { }

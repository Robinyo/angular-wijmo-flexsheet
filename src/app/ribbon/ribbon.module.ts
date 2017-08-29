import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import { RibbonComponent } from './ribbon.component';

@NgModule({
  imports: [
    CommonModule,
    WjInputModule
  ],
  declarations: [ RibbonComponent ],
  providers: [],
  exports: [ RibbonComponent ]
})
export class RibbonModule { }

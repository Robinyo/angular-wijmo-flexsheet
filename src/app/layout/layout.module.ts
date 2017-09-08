import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';

import { RibbonModule } from '../ribbon/ribbon.module';
import { WorksheetModule } from '../worksheet/worksheet.module';

import { WorksheetService } from '../services/worksheet.service';

@NgModule({
  imports: [
    CommonModule,
    RibbonModule,
    WorksheetModule,
  ],
  declarations: [ LayoutComponent ],
  providers: [ WorksheetService ],
  exports: [ LayoutComponent ]
})
export class LayoutModule { }

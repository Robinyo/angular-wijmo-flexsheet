import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';

import { WorksheetComponent } from './worksheet.component';

import { CountryService } from '../services/country.service';

@NgModule({
  imports: [
    CommonModule,
    WjGridSheetModule
  ],
  declarations: [ WorksheetComponent ],
  providers: [ CountryService ],
  exports: [ WorksheetComponent ]
})
export class WorksheetModule { }

import 'script-loader!jszip/dist/jszip.min.js';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RibbonModule } from './ribbon/ribbon.module';
import { WorksheetModule } from './worksheet/worksheet.module';

import { WorksheetService } from './services/worksheet.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RibbonModule,
    WorksheetModule
  ],
  providers: [ WorksheetService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

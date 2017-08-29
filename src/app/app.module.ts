import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RibbonModule } from './ribbon/ribbon.module';
import { WorksheetModule } from './worksheet/worksheet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RibbonModule,
    WorksheetModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

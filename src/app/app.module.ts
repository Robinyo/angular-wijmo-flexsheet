import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorksheetModule } from './worksheet/worksheet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorksheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

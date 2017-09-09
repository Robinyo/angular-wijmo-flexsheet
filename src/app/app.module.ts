import 'script-loader!jszip/dist/jszip.min.js';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
// import { PaletteModule } from './palette/flex-grid/palette.module';
// import { PaletteComponent } from './palette/flex-grid/palette.component';
import { PaletteModule } from './palette/flex-sheet/palette.module';
import { PaletteComponent } from './palette/flex-sheet/palette.component';

import { AppComponent } from './app.component';

import { ConsoleLoggerService } from './services/log4ts/console-logger.service';
import { LoggerService } from './services/log4ts/logger.service';

const routes: Routes = [
  // Basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LayoutComponent },
  { path: 'palette', component: PaletteComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    PaletteModule,

    RouterModule.forRoot(routes)
  ],
  providers: [ { provide: LoggerService, useClass: ConsoleLoggerService } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

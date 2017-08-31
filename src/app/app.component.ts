import { Component, OnInit, ViewChild } from '@angular/core';

import { WorksheetComponent } from './worksheet/worksheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(WorksheetComponent)
  private worksheet: WorksheetComponent;

  public worksheetHeight: number;
  private ribbonHeight: number;

  ngOnInit() {
    this.ribbonHeight = document.getElementById('ribbon-tabs-container').clientHeight;
    this.worksheetHeight = window.innerHeight - this.ribbonHeight;
  }

  // @HostListener('window:resize')
  onResize(event) {
    this.ribbonHeight = document.getElementById('ribbon-tabs-container').clientHeight;
    this.worksheetHeight = event.target.innerHeight - this.ribbonHeight;
  }

  /**
   * @param {any} event  Process events emitted by the Ribbon component
   *
   * @example
   * <app-ribbon (ribbonClicked)="ribbonClicked($event)"></app-ribbon>
   *
   * @returns {void}
   */
  ribbonClicked(event: any) {

    const methodName = event.methodName;

    if (this.worksheet[methodName]) {
      // if (event.param1) {
      if (event.hasOwnProperty('param1')) {
        const param1 = event.param1;
        console.log('app.component -> action: ' + methodName + ' param1: ' + param1);
        this.worksheet[methodName](param1);
      } else {
        console.log('app.component -> action: ' + methodName);
        this.worksheet[methodName]();
      }
    }
  }
}

// https://learnxinyminutes.com/docs/typescript/

// https://stackoverflow.com/questions/39300526/how-i-can-detect-window-resize-instantly-in-angular-2
// https://stackoverflow.com/questions/43835211/angular-2-dynamically-set-css-width-of-element-based-on-available-real-estate
// https://stackoverflow.com/questions/35882670/dynamically-updating-css-in-angular-2

// console.log('worksheetHeight: ' + this.worksheetHeight);

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
      if (event.hasOwnProperty('param1')) {  // if (event.param1) {
        const param1 = event.param1;
        // console.log('app.component -> action: ' + methodName + ' param1: ' + param1);
        this.worksheet[methodName](param1);
      } else {
        // console.log('app.component -> action: ' + methodName);
        this.worksheet[methodName]();
      }
    }
  }
}

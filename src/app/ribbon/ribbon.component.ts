import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent {

  @Output() ribbonClicked = new EventEmitter<any>();

  /**
   * @param {any} action  The action to process
   *
   * @example
   * (click)="command({ methodName: 'fileNew' })"
   *
   * @returns {void}
   */
  command(action: any) {

    console.log('ribbon.component -> action: ' + action);

    // The Ribbon (child) component emits events when clicked
    this.ribbonClicked.emit(action);
  }
}

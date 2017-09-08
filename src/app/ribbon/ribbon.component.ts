import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

import { WorksheetService } from '../services/worksheet.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnDestroy {

  private subscription: Subscription;
  selectionFormatState: any = {};

  @Output() ribbonClicked = new EventEmitter<any>();

  constructor(private worksheetService: WorksheetService) {
    this.subscription = this.worksheetService.getState().subscribe(
      selectionFormatState => {
        this.selectionFormatState = selectionFormatState;
        // console.log(`RibbonComponent IFormatState.isBold: ` + this.selectionFormatState.isBold);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * @param {any} action  The action to process
   *
   * @example
   * <button class="btn btn-default btn-large no-border" (click)="command({ methodName: 'fileNew' })">
   *
   * @returns {void}
   */
  command(action: any) {
    // console.log('ribbon.component -> action: ' + action);
    this.ribbonClicked.emit(action);
  }

  windowOpen() {
    const params = 'width=300,height=400,left=100,top=100';
    window.open('/palette', 'FloatingToolbar', params);
  }
}

/*

    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=400,left=100,top=100`;
    window.open('/palette', 'FloatingToolbar', params);

 */

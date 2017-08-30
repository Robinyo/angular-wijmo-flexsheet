import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent {

  @Output() ribbonClicked = new EventEmitter<any>();

  constructor() { }

  command(action: any) {

    console.log('ribbon.component -> action: ' + action);

    this.ribbonClicked.emit(action);
  }
}

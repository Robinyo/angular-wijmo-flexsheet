import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public worksheetHeight: number;
  // public worksheetHeight = 0;

  ngOnInit() {
    const ribbonHeight = document.getElementById('ribbon-tabs-container').clientHeight;
    this.worksheetHeight = window.innerHeight - ribbonHeight;
  }

  onResize(event) {
    const ribbonHeight = document.getElementById('ribbon-tabs-container').clientHeight;
    this.worksheetHeight = event.target.innerHeight - ribbonHeight;
  }
}

// https://learnxinyminutes.com/docs/typescript/

// https://stackoverflow.com/questions/39300526/how-i-can-detect-window-resize-instantly-in-angular-2
// https://stackoverflow.com/questions/43835211/angular-2-dynamically-set-css-width-of-element-based-on-available-real-estate
// https://stackoverflow.com/questions/35882670/dynamically-updating-css-in-angular-2

// console.log('worksheetHeight: ' + this.worksheetHeight);

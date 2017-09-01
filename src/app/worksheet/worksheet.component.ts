import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import * as wjcGrid from 'wijmo/wijmo.grid';

import { Component, ViewChild } from '@angular/core';

import { WorksheetService } from '../services/worksheet.service';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent {

  @ViewChild('flexSheet') flexSheet: wjcGridSheet.FlexSheet;

  data: any[];
  // undoStack: wjcGridSheet.UndoStack;
  selectionFormatState: wjcGridSheet.IFormatState = {};

  selection: any = {
    content: '',
    position: '',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '8px'
  };
  private _updatingSelection = false;

  constructor(private worksheetService: WorksheetService,
              private countryService: CountryService) {

    // this.selectionFormatState = {};
    this.data = this.countryService.getData(49);
  }

  flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {
    const self = this;

    if (flexSheet) {
      flexSheet.deferUpdate(() => {
        flexSheet.selectedSheetIndex = 0;
        flexSheet.selectedSheet.itemsSource = this.data;
        self._initDataMapForBindingSheet(flexSheet);
      });

      flexSheet.selectionChanged.addHandler((sender: any, args: wjcGrid.CellRangeEventArgs) => {
        self._updateSelection(args.range);
        self.selectionFormatState = flexSheet.getSelectionFormatState();

        this.worksheetService.setState(self.selectionFormatState);
      });
    }
  }

  applyBoldStyle() {
    if (this.flexSheet) {
      this.flexSheet.applyCellsStyle({ fontWeight: this.selectionFormatState.isBold ? 'none' : 'bold' });
      this.selectionFormatState.isBold = !this.selectionFormatState.isBold;

      this.worksheetService.setState(this.selectionFormatState);
    }
  }

  applyItalicStyle() {
    if (this.flexSheet) {
      this.flexSheet.applyCellsStyle({ fontStyle: this.selectionFormatState.isItalic ? 'none' : 'italic' });
      this.selectionFormatState.isItalic = !this.selectionFormatState.isItalic;

      this.worksheetService.setState(this.selectionFormatState);
    }
  }

  applyUnderlineStyle() {
    if (this.flexSheet) {
      this.flexSheet.applyCellsStyle({ textDecoration: this.selectionFormatState.isUnderline ? 'none' : 'underline' });
      this.selectionFormatState.isUnderline = !this.selectionFormatState.isUnderline;

      this.worksheetService.setState(this.selectionFormatState);
    }
  }

  // Initialise the dataMap for the bound sheet.
  private _initDataMapForBindingSheet(flexSheet) {
    let column;

    if (flexSheet) {
      column = flexSheet.columns.getColumn('countryId');
      if (column && !column.dataMap) {
        column.dataMap = this._buildDataMap(this.countryService.countries);
      }
      column = flexSheet.columns.getColumn('productId');
      if (column && !column.dataMap) {
        column.dataMap = this._buildDataMap(this.countryService.products);
      }
    }
  }

  private _updateSelection(sel) {
    const flexSheet = this.flexSheet,
      row = flexSheet.rows[sel.row],
      rowCnt = flexSheet.rows.length,
      colCnt = flexSheet.columns.length;
    let r,
      c,
      cellStyle,
      cellRange,
      rangeSum,
      rangeAvg,
      rangeCnt;

    this._updatingSelection = true;
    if (sel.row > -1 && sel.col > -1 && rowCnt > 0 && colCnt > 0
      && sel.col < colCnt && sel.col2 < colCnt
      && sel.row < rowCnt && sel.row2 < rowCnt) {
      r = sel.row >= rowCnt ? rowCnt - 1 : sel.row;
      c = sel.col >= colCnt ? colCnt - 1 : sel.col;
      this.selection.content = flexSheet.getCellData(r, c, true);
      this.selection.position = wjcGridSheet.FlexSheet.convertNumberToAlpha(sel.col) + (sel.row + 1);
      cellStyle = flexSheet.selectedSheet.getCellStyle(sel.row, sel.col);

      /*
      if (cellStyle) {
        this.cboFontName.selectedIndex = this._checkFontfamily(cellStyle.fontFamily);
        this.cboFontSize.selectedIndex = this._checkFontSize(cellStyle.fontSize);

      } else {
        this.cboFontName.selectedIndex = 0;
        this.cboFontSize.selectedIndex = 5;
      }
      */

      if (sel.col !== -1 && sel.col2 !== -1 && sel.row !== -1 && sel.row2 !== -1) {
        cellRange = wjcGridSheet.FlexSheet.convertNumberToAlpha(sel.leftCol) + (sel.topRow + 1) + ':' +
          wjcGridSheet.FlexSheet.convertNumberToAlpha(sel.rightCol) + (sel.bottomRow + 1);
        rangeSum = flexSheet.evaluate('sum(' + cellRange + ')');
        rangeAvg = flexSheet.evaluate('average(' + cellRange + ')');
        rangeCnt = flexSheet.evaluate('count(' + cellRange + ')');

        // $('.status').text(cellRange + ' Average: ' + rangeAvg + ' Count: ' + rangeCnt + ' Sum: ' + rangeSum);
      } else {
        // $('.status').text('');
      }
    } else {
      this.selection.content = '';
      this.selection.position = '';
      // $('.status').text('');
    }

    this._updatingSelection = false;
  }

  // build a data map from a string array using the indices as keys
  private _buildDataMap(items) {
    const map = [];
    for (let i = 0; i < items.length; i++) {
      map.push({ key: i, value: items[i] });
    }
    return new wjcGrid.DataMap(map, 'key', 'value');
  }

  fileLoad(event: any) {
    if (this.flexSheet && event.target.files[0]) {
      this.flexSheet.loadAsync(event.target.files[0]);
      event.target.value = '';
    }
  }

  fileSave() {
    if (this.flexSheet) {
      this.flexSheet.saveAsync('flexsheet-1.xlsx');
    }
  }

  fileNew() {
    if (this.flexSheet) {
      this.flexSheet.clear();
    }
  }
}

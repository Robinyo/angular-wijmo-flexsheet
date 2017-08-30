import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import * as wjcGrid from 'wijmo/wijmo.grid';

import { Component, Inject, ViewChild } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css']
})
export class WorksheetComponent {

  @ViewChild('flexSheet') flexSheet: wjcGridSheet.FlexSheet;

  protected dataSvc: DataService;
  data: any[];

  constructor(@Inject(DataService) dataSvc: DataService) {
    this.dataSvc = dataSvc;
    this.data = dataSvc.getData(49);
  }

  flexSheetInit(flexSheet: wjcGridSheet.FlexSheet) {

    const self = this;

    if (flexSheet) {
      flexSheet.deferUpdate(() => {
        flexSheet.selectedSheetIndex = 0;
        flexSheet.selectedSheet.itemsSource = this.data;
        self._initDataMapForBindingSheet(flexSheet);
      });
    }
  }

  // initialize the dataMap for the bound sheet.
  private _initDataMapForBindingSheet(flexSheet) {
    let column;

    if (flexSheet) {
      column = flexSheet.columns.getColumn('countryId');
      if (column && !column.dataMap) {
        column.dataMap = this._buildDataMap(this.dataSvc.countries);
      }
      column = flexSheet.columns.getColumn('productId');
      if (column && !column.dataMap) {
        column.dataMap = this._buildDataMap(this.dataSvc.products);
      }
    }
  }

  // build a data map from a string array using the indices as keys
  private _buildDataMap(items) {
    const map = [];
    for (let i = 0; i < items.length; i++) {
      map.push({ key: i, value: items[i] });
    }
    return new wjcGrid.DataMap(map, 'key', 'value');
  }

  fileImport(event) {

    if (this.flexSheet && event.target.files[0]) {
      this.flexSheet.loadAsync(event.target.files[0]);
      event.target.value = '';
    }
  }

  fileSave() {

    if (this.flexSheet) {
      this.flexSheet.saveAsync('flexsheet.xlsx');
    }
  }

  fileNew() {

    if (this.flexSheet) {
      this.flexSheet.clear();
    }
  }
}

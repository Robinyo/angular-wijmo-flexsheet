/**
 * The WjFlexSheet is the Angular 2 component for the FlexSheet control.
 *
 * See: http://wijmo.com/5/docs/topic/wijmo-wijmo.angular2.grid.sheet.WjFlexSheet.Class.html
 *
 * Note: Use the wj-flex-sheet component to add FlexSheet controls to your Angular 2 applications.
 *       The WjFlexSheet component is derived from the FlexSheet control and inherits all its
 *       properties, events and methods. The wj-flex-sheet component may contain a WjSheet child component.
 */

import * as wjcGridSheet from 'wijmo/wijmo.grid.sheet';
import * as wjcGrid from 'wijmo/wijmo.grid';

import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements AfterViewInit {

  public profitAndLossItems = [{

    items: [
      {
        section: 'Income',

        items: [
          { field1: 'Revenue'},
          { field1: 'Sales'}
        ]
      },
      {
        section: 'Cost Of Sales',
        items: [
          { field1: 'Direct Costs'}
        ]
      },
      {
        section: 'Other Income',
        items: [
          { field1: 'Other Income'}
        ]
      },
      {
        section: 'Expences',
        items: [
          { field1: 'Expences'},
          { field1: 'Depreciation'},
          { field1: 'Overheads'}
        ]
      }
    ]
  }];

  @ViewChild('flexSheet')
  private flexSheet: wjcGridSheet.FlexSheet;

  ngAfterViewInit() {

    this.flexSheet.childItemsPath = 'items';
    this.flexSheet.selectionMode = wjcGrid.SelectionMode.Row;
    this.flexSheet.headersVisibility = wjcGrid.HeadersVisibility.None;

    this.flexSheet.allowAddNew = false;
    this.flexSheet.isReadOnly = true;
    this.flexSheet.showMarquee = false;

    const grid = new wjcGrid.FlexGrid(document.createElement('div'));
    grid.initialize({
      autoGenerateColumns: false,
      itemsSource: this.profitAndLossItems,
      columns: [
        { header: ' ', binding: 'section', width: '2*' },
        { header: ' ', binding: 'field1' }
      ]
    });

    this.flexSheet.sheets.push(new wjcGridSheet.Sheet(this.flexSheet, grid, 'Basic'));

    this.flexSheet.rows[0].visible = false;
    this.flexSheet.rows[1].visible = false;
  }
}

/*

    if (! this.flexSheet) {
      return;
    }

    // this.flexSheet.selectionMode = wjcGrid.SelectionMode.Row;
    // this.flexSheet.headersVisibility = wjcGrid.HeadersVisibility.None;

    const basicSheet = new wjcGrid.FlexGrid(document.createElement('div'));
    basicSheet.rows.clear();
    basicSheet.columns.clear();

    const column = new wjcGrid.Column();
    column.header = 'Name';
    column.binding = 'name';
    column.width = '*';
    column.minWidth = 120;
    column.allowDragging = false;
    basicSheet.columns.push(column);

    this.flexSheet.sheets.push(new wjcGridSheet.Sheet(this.flexSheet, basicSheet, 'Basic'));

 */

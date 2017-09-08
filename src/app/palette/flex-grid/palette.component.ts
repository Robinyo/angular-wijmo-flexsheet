import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridDetail from 'wijmo/wijmo.grid.detail';

import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements AfterViewInit {

  private profitAndLossItems = [
    { category: 'Income',
      items: [
        { value: 'Revenue'},
        { value: 'Sales'}
      ]
    },
    { category: 'Cost Of Sales',
      items: [
        { value: 'Direct Costs'}
      ]
    },
    { category: 'Other Income',
      items: [
        { value: 'Other Income'}
      ]
    },
    { category: 'Expences',
      items: [
        { value: 'Expences'},
        { value: 'Depreciation'},
        { value: 'Overheads'}
      ]
    }
  ];

  @ViewChild('flexGrid')
  private flexGrid: wjcGrid.FlexGrid;

  categories: wjcCore.CollectionView;

  constructor() {
    this.categories = new wjcCore.CollectionView(this.profitAndLossItems);
  }

  ngAfterViewInit() {

    this.flexGrid.isReadOnly = true;
    this.flexGrid.headersVisibility = wjcGrid.HeadersVisibility.Row;

    const dp = new wjcGridDetail.FlexGridDetailProvider(this.flexGrid);
    // dp.detailVisibilityMode = wjcGridDetail.DetailVisibilityMode.ExpandMulti;
    // dp.detailVisibilityMode = wjcGridDetail.DetailVisibilityMode.ExpandSingle;
    dp.detailVisibilityMode = wjcGridDetail.DetailVisibilityMode.ExpandMulti;

    dp.createDetailCell = (row) => {

      // console.log('row.index: ' + row.index);

      const cell = document.createElement('div');
      this.flexGrid.hostElement.appendChild(cell);
      const detailGrid = new wjcGrid.FlexGrid(cell, {
        isReadOnly: true,
        headersVisibility: wjcGrid.HeadersVisibility.None,
        autoGenerateColumns: false,
        itemsSource: this.getSchemeValues(row.dataItem.category),
        columns: [
          { header: 'Value', binding: 'value', width: '*' }
        ]
      });

      cell.parentElement.removeChild(cell);
      return cell;
    };
  }

  getSchemeValues(category: string) {

    console.log('category: ' + category);
    const index = this.profitAndLossItems.findIndex( item => item.category === category);
    console.log('index: ' + index);
    return this.profitAndLossItems[index]['items'];
  }
}

/*



 */

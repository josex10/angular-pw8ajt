import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ETableAction } from '../../core/enums';
import {
  ITableConfig,
  ITableColumns,
  ITableActionClick,
} from '../../core/interfaces';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input('input-table-columns') input_table_columns: ITableColumns[] = [];
  @Input('input-table-config') input_table_config: ITableConfig;
  @Input('input-table-data') input_table_data: any[] = [];
  @Output() clickResponse = new EventEmitter<ITableActionClick>();

  public tableAction = ETableAction;

  actionClicked(data: any, action: ETableAction) {
    this.clickResponse.emit({ data, action });
  }
}

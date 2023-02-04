import { Component, Input, OnInit } from '@angular/core';
import { ETableAction } from '../../core/enums';
import { ITableColumns } from '../../core/interfaces/table-columns.interface';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input('input-table-columns') input_table_columns: ITableColumns[] = [];
  @Input('input-table-data') input_table_data: any[] = [];
  public tableAction = ETableAction;
}

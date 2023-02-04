import { ITableColumns } from './';
import { ETableAction } from '../enums';

export interface ITableConfig {
  columns: ITableColumns[];
  actions?: ETableAction[];
}

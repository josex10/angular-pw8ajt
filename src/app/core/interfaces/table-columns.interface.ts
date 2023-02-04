import { ETableAction } from '../enums';

export interface ITableColumns {
  name: string;
  key: string;
  isHidden: boolean;
  action?: ETableAction;
}

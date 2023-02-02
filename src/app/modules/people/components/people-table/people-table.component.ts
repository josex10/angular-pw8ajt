import { Component } from '@angular/core';
import { ITableColumns, IPerson } from '../../../../core/interfaces';

@Component({
  selector: 'app-people-table-component',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
})
export class PeopleTableComponent {
  tableColumns: ITableColumns[] = [
    { name: 'Name', key: 'name' },
    { name: 'Lastname', key: 'lastname' },
    { name: 'Actions', key: 'actions' },
  ];

  tableData: IPerson[] = [
    { id: 1, name: 'Jose', lastname: 'Badilla' },
    { id: 2, name: 'Charlie', lastname: 'Hurch' },
    { id: 3, name: 'Andrew', lastname: 'Tommr' },
    { id: 4, name: 'Phill', lastname: 'Nireich' },
    { id: 5, name: 'Elaine', lastname: 'Straut' },
  ];
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITableColumns, IPerson } from '../../../../core/interfaces';
import { PersonService } from '../../../../core/services/person.service';

@Component({
  selector: 'app-people-table-component',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
})
export class PeopleTableComponent implements OnInit {
  tableColumns: ITableColumns[] = [
    { name: 'Id', key: 'id' },
    { name: 'Name', key: 'name' },
    { name: 'Lastname', key: 'lastname' },
    { name: 'Actions', key: 'actions' },
  ];

  /*
  tableData: IPerson[] = [
    { id: 1, name: 'Jose', lastname: 'Badilla' },
    { id: 2, name: 'Charlie', lastname: 'Hurch' },
    { id: 3, name: 'Andrew', lastname: 'Tommr' },
    { id: 4, name: 'Phill', lastname: 'Nireich' },
    { id: 5, name: 'Elaine', lastname: 'Straut' },
  ];
  */
  tableData$: Observable<IPerson[]>;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.tableData$ = this.personService.fnGetAllPeople();
  }
}

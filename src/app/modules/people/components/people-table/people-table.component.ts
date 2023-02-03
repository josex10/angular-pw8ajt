import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
  tableData$: Observable<IPerson[]>;

  constructor(
    private personService: PersonService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.tableData$ = this.personService.fnGetAllPeople();
  }
}

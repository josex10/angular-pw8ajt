import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ITableColumns, IPerson } from '../../../../core/interfaces';
import { personListAction } from '../../../../core/ngrx/actions/person.action';
import { personListSelector } from '../../../../core/ngrx/selectors/person.selector';

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

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(personListAction());
    this.tableData$ = this.store.select(personListSelector).pipe(
      map((people) => {
        return people;
      })
    );
  }
}

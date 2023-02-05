import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/ngrx/app.state';
import {
  personListAction,
  personListActionSuccess,
} from '../../../../core/ngrx/actions';

import { personListSelector } from '../../../../core/ngrx/selectors';

import { Observable, map, tap } from 'rxjs';

import { ETableAction } from '../../../../core/enums';

import {
  ITableColumns,
  IPerson,
  ITableActionClick,
  ITableConfig,
} from '../../../../core/interfaces';

@Component({
  selector: 'app-people-table-component',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css'],
})
export class PeopleTableComponent implements OnInit {
  public tableColumns: ITableColumns[] = [
    { name: 'Id', key: 'id', isHidden: true },
    { name: 'Name', key: 'name', isHidden: false },
    { name: 'Lastname', key: 'lastname', isHidden: false },
    {
      name: 'Actions',
      key: 'actions',
      isHidden: false,
    },
  ];

  public tableConfig: ITableConfig = {
    columns: this.tableColumns,
    actions: [ETableAction.DELETE],
  };
  public tableData$: Observable<IPerson[]>;
  private personList: IPerson[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(personListAction());
    this.tableData$ = this.store.select(personListSelector).pipe(
      map((people) => {
        return people;
      })
    );
  }

  actionClicked(data: ITableActionClick) {
    this.fnRemovePerson(data.data);
  }

  fnRemovePerson(person: IPerson) {
    this.store
      .select(personListSelector)
      .subscribe((data) => (this.personList = data));

    const removeData = this.personList.filter(function (value) {
      return value.id !== person.id;
    });

    this.store.dispatch(personListActionSuccess({ personList: removeData }));
  }
}

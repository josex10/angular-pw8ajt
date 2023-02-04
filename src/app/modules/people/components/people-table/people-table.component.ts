import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ETableAction } from '../../../../core/enums';
import { ITableColumns, IPerson } from '../../../../core/interfaces';
import { ITableConfig } from '../../../../core/interfaces/table-config.interface';
import { personListAction } from '../../../../core/ngrx/actions/person.action';
import { AppState } from '../../../../core/ngrx/app.state';
import { personListSelector } from '../../../../core/ngrx/selectors/person.selector';

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
    actions: [ETableAction.REMOVE],
  };
  public tableData$: Observable<IPerson[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(personListAction());
    this.tableData$ = this.store.select(personListSelector).pipe(
      map((people) => {
        return people;
      })
    );
  }
}

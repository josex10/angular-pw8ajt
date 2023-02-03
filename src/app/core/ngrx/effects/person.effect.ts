import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, catchError, EMPTY } from 'rxjs';
import { IPerson } from '../../interfaces';
import { PersonService } from '../../services/person.service';
import * as fromActions from '../actions/person.action';
import { AppState } from '../app.state';

@Injectable()
export class PersonEffects {
  personList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.personListAction),
      mergeMap(() =>
        this.personServide.fnGetAllPeople().pipe(
          map((personList: IPerson[]) => {
            return fromActions.personListActionSuccess({ personList });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private personServide: PersonService
  ) {}
}

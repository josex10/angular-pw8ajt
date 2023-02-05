import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, EMPTY } from 'rxjs';
import { IPerson } from '../../interfaces';
import { PersonService } from '../../services';
import * as fromActions from '../actions';

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
    private personServide: PersonService
  ) {}
}

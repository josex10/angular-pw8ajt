import { createAction, props } from '@ngrx/store';
import { IPerson } from '../../interfaces';

export const personListAction = createAction(
  '[Person List Action] Get person List.'
);

export const personListActionSuccess = createAction(
  '[Person List Action] Get person List Success.',
  props<{ personList: IPerson[] }>()
);

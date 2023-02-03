import { createAction, props } from '@ngrx/store';
import { IPerson } from '../../interfaces';

export const personListAction = createAction(
  '[Person List Action] Get person List.'
);

export const personListActionSuccess = createAction(
  '[Person List Action] Get person List Success.',
  props<{ personList: IPerson[] }>()
);

export const personListAddNewAction = createAction(
  '[Person List Action Add New] Add new person to List.',
  props<{ person: IPerson }>()
);

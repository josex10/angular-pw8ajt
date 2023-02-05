import { createReducer, on } from '@ngrx/store';
import { IPerson } from '../../interfaces';
import { personListActionSuccess } from '../actions';

const initialState: IPerson[] = [];

export const personListReducer = createReducer(
  initialState,
  on(personListActionSuccess, (state, list) => {
    return list.personList;
  })
);

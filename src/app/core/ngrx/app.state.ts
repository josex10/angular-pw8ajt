import { ActionReducerMap } from '@ngrx/store';
import { IPerson } from '../interfaces';
import { personListReducer } from './reducers/person.reducer';

export interface AppState {
  personListState: IPerson[];
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  personListState: personListReducer,
};

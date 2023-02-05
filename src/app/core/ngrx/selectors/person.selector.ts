import { createSelector } from '@ngrx/store';
import { IPerson } from '../../interfaces';
import { AppState } from '../app.state';

export const selectPersonList = (state: AppState) => state.personListState;

export const personListSelector = createSelector(
  selectPersonList,
  (state: IPerson[]) => state
);

import { createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPerson } from '../../interfaces';
import { AppState } from '../app.state';

export const selectPersonList = (state: AppState) => state.personListState;

export const personListSelector = createSelector(
  selectPersonList,
  (state: IPerson[]) => state
);

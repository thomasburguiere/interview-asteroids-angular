import { createSelector } from '@ngrx/store';
import { selectCount } from './app.selector';
import { CountState } from './counter.reducer';

export const selectCountValue = createSelector(
    selectCount,
    (state: CountState) => state.value
);


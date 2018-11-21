import { createFeatureSelector } from '@ngrx/store';
import { CountState } from './counter.reducer';

export const selectCount = createFeatureSelector<CountState>('count');

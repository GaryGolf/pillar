import { combineReducers, Reducer } from 'redux';
import { EmptyState, empty } from './empty';

export interface RootState {
  empty: EmptyState;
}

export default combineReducers<RootState>({ empty });

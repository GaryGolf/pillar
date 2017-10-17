import { combineReducers, Reducer } from 'redux';
import { routerReducer as router } from 'redux-first-routing';
import { EmptyState, empty } from './empty';

export interface RootState {
  router: any;
  empty: EmptyState;
}

export default combineReducers<RootState>({ router, empty });

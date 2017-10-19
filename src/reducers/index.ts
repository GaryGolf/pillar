import { combineReducers, Reducer } from 'redux';
import { routerReducer as router } from 'redux-first-routing';
import { app } from './app';

export interface RootState {
  router: any;
  app: AppState;
}

export default combineReducers<RootState>({ router, app });

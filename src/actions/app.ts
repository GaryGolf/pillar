import store from '../store';
import * as Actions from './types';

export function showCart():void {
  const type = Actions.SHOW_CART;
  store.dispatch({ type });
}

export function hideCart():void {
  const type = Actions.HIDE_CART;
  store.dispatch({ type });
}

export function showSearch(): void {
  const type = Actions.SHOW_SEARCH;
  store.dispatch({ type });
}

export function hideSearch(): void {
  const type = Actions.HIDE_SEARCH;
  store.dispatch({ type });
}

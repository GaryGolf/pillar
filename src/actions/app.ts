import store from '../store';
import * as Actions from './types';

// Cart
export function showCart():void {
  const type = Actions.SHOW_CART;
  store.dispatch({ type });
}

export function hideCart():void {
  const type = Actions.HIDE_CART;
  store.dispatch({ type });
}

export function addItemToCart(payload):void {
  const type = Actions.ADD_ITEM_TO_CART;
  store.dispatch({ type, payload });
}

export function removeCartItem(id:string):void {
  const type = Actions.REMOVE_CART_ITEM;
  store.dispatch({ type, payload: id });
}

// Search
export function showSearch(): void {
  const type = Actions.SHOW_SEARCH;
  store.dispatch({ type });
}

export function hideSearch(): void {
  const type = Actions.HIDE_SEARCH;
  store.dispatch({ type });
}

// Menu
export function setActiveMenu(label:string): void {
  const type = Actions.SET_ACTIVE_MENU;
  const payload = label;
  store.dispatch({ type, payload });
}

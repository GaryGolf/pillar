import store from '../store';
import * as Actions from './types';

export default class App {

  // Cart
  static showCart():void {
    const type = Actions.SHOW_CART;
    store.dispatch({ type });
  }
  
  static hideCart():void {
    const type = Actions.HIDE_CART;
    store.dispatch({ type });
  }
  
  static addItemToCart(payload):void {
    const type = Actions.ADD_ITEM_TO_CART;
    store.dispatch({ type, payload });
  }
  
  static removeCartItem(id:string):void {
    const type = Actions.REMOVE_CART_ITEM;
    store.dispatch({ type, payload: id });
  }
  
  // Search
  static showSearch(): void {
    const type = Actions.SHOW_SEARCH;
    store.dispatch({ type });
  }
  
  static hideSearch(): void {
    const type = Actions.HIDE_SEARCH;
    store.dispatch({ type });
  }
  
  // Menu
  static setActiveMenu(label:string): void {
    const type = Actions.SET_ACTIVE_MENU;
    const payload = label;
    store.dispatch({ type, payload });
  }

}

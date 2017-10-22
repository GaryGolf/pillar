import store from '../store';
import { push as reduxPush } from 'redux-first-routing';

export default class Router {
  
  static push(url:string = '#') {
    store.dispatch(reduxPush(url));
  }

  static showProductCard(id:string): void {
    store.dispatch(reduxPush(`/product-card/${id}`));
  }

  static goHome() {
    store.dispatch(reduxPush('/'));
  }

  static goToShop() {
    store.dispatch(reduxPush('/home-shop-slider'));
  }

}

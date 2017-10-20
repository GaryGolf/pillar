import store from '../store';
import { push as reduxPush } from 'redux-first-routing';

export default class Router {
  
  static push(url:string = '#') {
    store.dispatch(reduxPush(url));
  }

}

import store from '../store';
import { push as reduxPush } from 'redux-first-routing';

export function push(url:string = '#') {
  store.dispatch(reduxPush(url));
}

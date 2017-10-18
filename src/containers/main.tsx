import * as React from 'react';
import UniversalRouter from 'universal-router';
import { startListener } from 'redux-first-routing';
import { Provider } from 'react-redux';
import store from '../store';
import history from '../history';

import Home from './home';
import Signup from './signup';
import Business from './business';
import HomeShopSlider from './home-shop-slider';
import ShopProduct from './shop-product-vanilla';
import BlogCards from './blog-cards-large';
import BlogPost from './blog-post-image-header';

const routes = [
  { path: '', action: () => <Home/> },
  { path: '/signup', action: () => <Signup/> },
  { path: '/business', action: () => <Business/> },
  { path: '/home-shop-slider', action: () => <HomeShopSlider/> },
  { path: '/shop-product-vanilla', action: () => <ShopProduct/> },
  { path: '/blog-cards-large', action: () => <BlogCards/> },
  { path: '/blog-post-image-header', action: () => <BlogPost/> },
];
const Router = new UniversalRouter(routes);

// const { pathname } = store.getState().router;

// const unsubscribe = store.subscribe(() => {
//   const { pathname } = store.getState().router;
//   render(pathname);
// });

console.log(history);

const wrap = component => <Provider store={store} key="provider">{component}</Provider>;
const render = pathname => Router.resolve(pathname).then(wrap);
export default render(location);
startListener(history, store);
history.listen(render);
render('/');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import { Provider } from 'react-redux';
import store from '../store';

import Home from './home';
import Signup from './signup';
import Business from './business';
import HomeShopSlider from './home-shop-slider';
import ShopProduct from './shop-product-vanilla';
import BlogCards from './blog-cards-large';
import BlogPost from './blog-post-image-header';

const routes = [
  { path: '/', action: () => <Home/> },
  { path: '/signup', action: () => <Signup/> },
  { path: '/business', action: () => <Business/> },
  { path: '/home-shop-slider', action: () => <HomeShopSlider/> },
  { path: '/shop-product-vanilla', action: () => <ShopProduct/> },
  { path: '/blog-cards-large', action: () => <BlogCards/> },
  { path: '/blog-post-image-header', action: () => <BlogPost/> },
];
const Router = new UniversalRouter(routes);
const { pathname } = store.getState().router;

const wrap = component => <Provider store={store} key="provider">{component}</Provider>;
const render = pathname => Router.resolve({ pathname }).then(wrap);
export default render(pathname);

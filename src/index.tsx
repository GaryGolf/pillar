import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import { Provider } from 'react-redux';
import store from './store';

import Main from './containers/main';
import Home from './containers/home';
import Signup from './containers/signup';
import Business from './containers/business';
import HomeShopSlider from './containers/home-shop-slider';
import ShopProductVanilla from './containers/shop-product-vanilla';

const routes = [
  { path: '/', action: () => <Home/> },
  { path: '/signup', action: () => <Signup/> },
  { path: '/business', action: () => <Business/> },
  { path: '/home-shop-slider', action: () => <HomeShopSlider/> },
  { path: '/shop-product-vanilla', action: () => <ShopProductVanilla/> },

];

const Router = new UniversalRouter(routes);
const pathname = window.location.pathname;

function wrap(component) {
  return <Provider store={store} key="provider">{component}</Provider>;
}

function render(component) {
  const container =  document.getElementById('layout');
  return ReactDOM.render(wrap(component), container);
}


Router.resolve({ pathname }).then(render);

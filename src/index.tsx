import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import { startListener } from 'redux-first-routing';
import { Provider } from 'react-redux';
import store from './store';
import history from './history';

import Home from 'containers/home-business-classic';
import Signup from 'containers/page-signup';
import Business from 'containers/business';
import HomeShopSlider from 'containers/home-shop-slider';
import ShopProduct from 'containers/shop-product-vanilla';
import BlogCards from 'containers/blog-cards-large';
import BlogPost from 'containers/blog-post-image-header';
import ContactForm from 'containers/page-contact-form-simple';
import HomeBusinessStartup from 'containers/home-business-startup';

const routes = [
  { path: '', action: () => <Home/> },
  { path: '/signup', action: () => <Signup/> },
  { path: '/business', action: () => <Business/> },
  { path: '/home-shop-slider', action: () => <HomeShopSlider/> },
  { path: '/shop-product-vanilla', action: () => <ShopProduct/> },
  { path: '/blog-cards-large', action: () => <BlogCards/> },
  { path: '/blog-post-image-header', action: () => <BlogPost/> },
  { path: '/page-contact-form-simple', action: () => <ContactForm/> },
  { path: '/home-business-startup', action: () => <HomeBusinessStartup/> },
];
const Router = new UniversalRouter(routes);
const unsubscribe = store.subscribe(() => {
  const { pathname } = store.getState().router;
  render(pathname);
});
const container =  document.getElementById('layout');
const render = pathname => Router.resolve(pathname)
  .then((component:JSX.Element) => {
    const app = <Provider store={store} key="provider">{component}</Provider>;
    ReactDOM.render(app, container);
  });

startListener(history, store);
render(location);

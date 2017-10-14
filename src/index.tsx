import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './containers/main';
import Home from './containers/home';
import Signup from './containers/signup';
import Business from './containers/business';
import HomeShopSlider from './containers/home-shop-slider';
import UniversalRouter from 'universal-router';

const routes = [
  {path: '/', action: () => <Home/> },
  {path: '/signup', action: () => <Signup/> },
  {path: '/business', action: () => <Business/> },
  {path: '/home-shop-slider', action: () => <HomeShopSlider/> }

];

const Router = new UniversalRouter(routes);

Router.resolve({pathname: window.location.pathname})
  .then(component=>{
    ReactDOM.render(
      <Provider store={store} key="provider">
      {component}
      </Provider>,document.getElementById('layout'));
  });

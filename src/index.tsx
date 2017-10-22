import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from 'containers/router';

import Home from 'containers/home-business-classic';
import Signup from 'containers/page-signup';
import Business from 'containers/business';
import HomeShopSlider from 'containers/home-shop-slider';
import ProductCard from 'containers/shop-product-vanilla';
import BlogCards from 'containers/blog-cards-large';
import BlogPost from 'containers/blog-post-image-header';
import ContactForm from 'containers/page-contact-form-simple';
import HomeBusinessStartup from 'containers/home-business-startup';

const routes = [
  { path: '', action: () => <Home/> },
  { path: '/signup', action: () => <Signup/> },
  { path: '/business', action: () => <Business/> },
  { path: '/home-shop-slider', action: () => <HomeShopSlider/> },
  { path: '/product-card/:id', action: context => <ProductCard id={context.params.id}/> },
  { path: '/blog-cards-large', action: () => <BlogCards/> },
  { path: '/blog-post-image-header', action: () => <BlogPost/> },
  { path: '/page-contact-form-simple', action: () => <ContactForm/> },
  { path: '/home-business-startup', action: () => <HomeBusinessStartup/> },
];

const container =  document.getElementById('layout');
    
ReactDOM.render(<Router routes={routes}/>, container);

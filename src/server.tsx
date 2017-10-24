import * as React from 'react';
import { renderToString } from 'react-dom/server';
// import * as express from 'express';
const { express } = require('express');
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

const app = express();

app.use(allowCrossDomain);
app.use(express.static('/'));
app.use(render);
app.listen(8080, () => {
  console.log('DEV server started at port: 8080')
});


function render(req, res) {
  // const text = renderToString(<Router routes={routes} pathname={'/'}/>);
  const text = renderToString(<Home/>);
  const html = inject('<h1>Hello</h1>');
  res.send(html);
}

function inject(text) {
  const html = require('./index.html');
  const template = `<div id="layout">${text}</div>`;
  const test = /<div\s*id="layout".*\/div>/i;
  return html.replace(test,template);
}

function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

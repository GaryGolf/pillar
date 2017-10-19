import * as React from 'react';
import Cart from '../components/cart';
import Search from '../components/search';
import Footer from '../components/footer';
import NavMenu from '../components/nav-menu';

import PageContact from '../components/page-contact-form-simple';


interface Props {}

export default class ContactForm extends React.Component <Props, null> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu noUtilityBar transparent/>
        <Cart />
        <Search />
        <PageContact.Image/>
        <PageContact.Features/>
        <PageContact.Form/>
        <Footer/>           
      </div>
    );
  }
}

import * as React from 'react';
import NavMenu from '../components/nav-menu';
import Content from '../components/home-shop-slider';
import Cart from '../components/cart';
import Search from '../components/search';
import Footer from '../components/footer';

interface Props {}
interface State {}

export default class HomeShopSlider extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu noUtilityBar transparent />
        <Cart />
        <Search />
        <Content.Header/>
        <Content.Quotation/>
        <Content.Collection/>
        <Content.Features/>
        <Content.Subscribe/>
        <Footer/>
        <Content.Promo/>
      </div>
    );
  }
}

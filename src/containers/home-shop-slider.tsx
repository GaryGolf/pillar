import * as React from 'react';
import NavBar from '../components/business-page/nav-bar';
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
        <NavBar />
        <Cart />
        <Search />
        <Content.Promo/>
        <Content.Quotation/>
        <Content.Collection/>
        <Content.Features/>
        <Content.Subscribe/>
        <Footer/>
      </div>
    );
  }
}

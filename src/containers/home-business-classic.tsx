import * as React from 'react';
import Cart from 'components/cart';
import Search from 'components/search';
import Footer from 'components/footer';
import Content from 'components/home-business-classic';
import NavMenu from 'components/nav-menu';

interface Props {}
interface State {}

export default class HomeShopSlider extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu transparent noUtilityBar />
        <Cart />
        <Search />
        <Content.Video/>
        <Content.About/>
        <Content.Portfolio/>
        <Content.Consultation/>
        <Footer/>           
      </div>
    );
  }
}

import * as React from 'react';
import Cart from '../components/cart';
import Search from '../components/search';
import Footer from '../components/footer';
import NavMenu from '../components/nav-menu';
import HomeBusinesStartup from '../components/home-business-startup';
import PartnersSlider from 'components/common/partners-slider';


interface Props {}
interface State {}

export default class ContactForm extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu noUtilityBar transparent/>
        <Cart />
        <Search />
        <HomeBusinesStartup.Image/>
        <HomeBusinesStartup.Title/>
        <HomeBusinesStartup.Features/>
        <HomeBusinesStartup.Why/>
        <HomeBusinesStartup.Love/>
        <HomeBusinesStartup.Robust/>
        <HomeBusinesStartup.Pricing/>
        <HomeBusinesStartup.Start/>
        <PartnersSlider/>
        <Footer/>           
      </div>
    );
  }
}

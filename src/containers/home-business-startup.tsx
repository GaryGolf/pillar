import * as React from 'react';
import Cart from '../components/cart';
import Search from '../components/search';
import Footer from '../components/footer';
import NavBar from '../components/home/nav-bar';
import HomeBusinesStartup from '../components/home-business-startup';


interface Props {}
interface State {}

export default class ContactForm extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <NavBar/>
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
        <Footer/>           
      </div>
    );
  }
}

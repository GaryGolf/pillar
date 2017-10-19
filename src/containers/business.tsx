import * as React from 'react';
import Footer from '../components/footer';
import About from '../components/business-page/about';
import NavBar from '../components/business-page/nav-bar';
import Cart from '../components/cart';
import Search from '../components/search';
import Carousel from '../components/business-page/carousel';

interface Props {}
interface State {}

export default class MainContainer extends React.Component <Props, State> {
  
  constructor(props:Props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container transition--fade transition--active">
        <NavBar />
        <Cart />
        <Search />
        <About.Second/>
        <About.Features/>
        <About.First/>
        <Carousel/>
        <Footer/>
      </div>
    );
  }
}

import * as React from 'react';
import Footer from '../components/footer';
import About from '../components/business-page/about';
import NavBar from '../components/business-page/nav-bar';
import Cart from '../components/cart';
import Search from '../components/search';
import Carousel from '../components/business-page/carousel';

interface Props {}
interface State {
  showCart: boolean;
  showSearch: boolean;
}

export default class MainContainer extends React.Component <Props, State> {
  
  constructor(props:Props) {
    super(props);
    this.state = {
      showCart: false,
      showSearch: false,
    };
  }

  handleCartClose = () => this.setState({ showCart:false });
  
  handleCartOpen = () => this.setState({ showCart:true });
  
  handleSearchClose = () => this.setState({ showSearch:false });
  
  handleSearchOpen = () => this.setState({ showSearch:true });
  

  render(){
    const { showCart, showSearch } = this.state;
    return (
      <div className="main-container transition--fade transition--active">
        <NavBar
          showCart={this.handleCartOpen}
          showSearch={this.handleSearchOpen}
        />
        <Cart 
          active={showCart}
          hide={this.handleCartClose}
        />
        <Search
          active={showSearch}
          close={this.handleSearchClose}
        />
        <About.Second/>
        <About.Features/>
        <About.First/>
        <Carousel/>
        <Footer/>
      </div>
    );
  }
}

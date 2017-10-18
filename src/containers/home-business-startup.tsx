import * as React from 'react';
import Cart from '../components/cart';
import Search from '../components/search';
import Footer from '../components/footer';
import NavBar from '../components/home/nav-bar';
import HomeBusinesStartup from '../components/home-business-startup';


interface Props {}
interface State {
  showCart: boolean;
  showSearch: boolean;
}

export default class ContactForm extends React.Component <Props, State> {
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

  render() {

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
        <HomeBusinesStartup.Image/>
        <HomeBusinesStartup.Title/>
        <HomeBusinesStartup.Features/>
        <HomeBusinesStartup.Why/>
        <Footer/>           
      </div>
    );
  }
}

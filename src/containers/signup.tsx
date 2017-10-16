import * as React from 'react';
import NavMenu from '../components/nav-menu';
import SignUp from '../components/sign-up/main-container';
import Cart from '../components/cart';
import Search from '../components/search';

interface Props {}
interface State {
  showCart: boolean;
  showSearch: boolean;
}

export default class Signup extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      showCart: false,
      showSearch: false,
    };
  }
 
  handleCartClose = () => {
    this.setState({ showCart:false });
  }
  handleCartOpen = () => {
    this.setState({ showCart:true });
  }
  handleSearchClose = () => {
    this.setState({ showSearch:false });
  }
  handleSearchOpen = () => {
    this.setState({ showSearch:true });
  }

  render() {
    const { showCart, showSearch } = this.state;
    return (
      <div>
        <NavMenu 
          openCart={this.handleCartOpen}
          openSearch={this.handleSearchOpen}
        />
        <Cart 
          active={showCart}
          hide={this.handleCartClose}
        />
        <Search
          active={showSearch}
          close={this.handleSearchClose}
        />
        <SignUp/>
      </div>
    );
  }
}

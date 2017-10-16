import * as React from 'react';
import NavMenu from '../components/nav-menu';
import SignUp from '../components/sign-up/main-container';
import Cart from '../components/cart';
import Search from '../components/search';

interface Props {}
interface State {
  showCart: boolean;
  showSearch: boolean;
  fixMenu: boolean;
}

export default class Signup extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      showCart: false,
      showSearch: false,
      fixMenu: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('screen', this.handleScroll);
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

  handleScroll() {
    const { fixMenu } = this.state;
    if (!fixMenu && document.documentElement.scrollTop > 200) {

      this.setState({ fixMenu:true });

    } else if (fixMenu && document.documentElement.scrollTop <= 200) {

      this.setState({ fixMenu:false });

    }
  }

  render() {
    const { showCart, showSearch, fixMenu } = this.state;
    return (
      <div>
        <NavMenu 
          openCart={this.handleCartOpen}
          openSearch={this.handleSearchOpen}
          fixed={fixMenu}
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

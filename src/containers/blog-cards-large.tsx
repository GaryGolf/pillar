import * as React from 'react';
import NavMenu from '../components/nav-menu';
import Footer from '../components/footer';
import Cart from '../components/cart';
import Search from '../components/search';
import BlogTitle from '../components/blog-cards-large/blog-cards-title';

interface Props {}
interface State {
  showCart: boolean;
  showSearch: boolean;
}

export default class ShopProduct extends React.PureComponent <Props, State> {
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
        <BlogTitle/>
        <Footer/>
      </div>
    );
  }
}

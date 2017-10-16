import * as React from 'react';
import NavMenu from '../components/nav-menu';

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
    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu
          openCart={this.handleCartOpen}
          openSearch={this.handleSearchOpen}
        />
      </div>
    );
  }
}

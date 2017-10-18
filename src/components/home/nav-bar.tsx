import * as React from 'react';
import Menu from '../nav-menu/nav-bar';

interface Props {
  showCart(): void;
  showSearch(): void;
}
interface State {
  open: boolean;
  fixed: boolean;
}

export default class NavBar extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      open:false,
      fixed: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { fixed } = this.state;
    if (!fixed && document.documentElement.scrollTop > 200) {

      this.setState({ fixed:true });

    } else if (fixed && document.documentElement.scrollTop <= 200) {

      this.setState({ fixed:false });

    }
  }
  handleNavOpenToggle = (event) => {
    this.setState(state => ({ open:!state.open }));
  }

  render() {
    const { open, fixed } = this.state;
    const { showCart, showSearch } = this.props;
    const navStyle = !open
			?	'transition--fade transition--active'
      : 'transition--fade transition--active nav-open';
      
    return (
      <nav className={navStyle} style={{ minHeight:0 }}>
        <Menu
          fixed={fixed}
          transparent={!fixed}
          openCart={showCart}
          openSearch={showSearch}
        /> 
        <div className="nav-mobile-toggle visible-sm visible-xs" 
          onClick={this.handleNavOpenToggle}>
          <i className="icon-Align-Right icon icon--sm"></i>
        </div>
      </nav>
    );
  }
}

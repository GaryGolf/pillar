import * as React from 'react';
import LogoModule from './logo-module';
import MenuModule from './menu-module';
import * as Actions from '../../constants/actions';
const { connect } = require('react-redux');

interface Props {
  fixed?: boolean;
  transparent?: boolean;
  showCart?(payload:boolean):void;
  showSearch?(payload:boolean):void;
}
interface State {
  fixed: boolean;
}

@connect(
  store => ({}),
  dispatch => ({
    showCart: payload => dispatch({ payload, type: Actions.SHOW_SLIDE_OUT_CART }),
    showSearch: payload => dispatch({ payload, type: Actions.SHOW_SEARCH }),
  }),
)
export default class NavBar extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      fixed: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { fixed } = this.state;
    if (!fixed && document.documentElement.scrollTop > 200) {

      this.setState({ fixed:true });

    } else if (fixed && document.documentElement.scrollTop <= 200) {

      this.setState({ fixed:false });

    }
  }
  
  handleCartOpen = (event) => {
    event.preventDefault();
    this.props.showCart(true);
  }

  handleSearchOpen = (event) => {
    event.preventDefault();
    this.props.showSearch(true);
  }

  render() {

    const { fixed } = this.state;
    const { transparent } = this.props;
    const barStyle = [
      'nav-bar',
      fixed ? 'nav--fixed' : '',
      transparent ? 'nav--absolute nav--transparent' : '',
    ].join(' ');
  
    return (
      <div className={barStyle} data-fixed-at="200">
        <LogoModule/>
        <MenuModule/>
        <div className="nav-module right">
          <a href="#" 
            className="nav-function" 
            data-notification-link="cart-overview"
            onClick={this.handleCartOpen}>
            <i className="interface-bag icon icon--sm"></i>
            <span>Cart</span>
          </a>
        </div>
        <div className="nav-module right">
          <a href="#" 
            className="nav-function modal-trigger" 
            data-modal-id="search-form"
            onClick={this.handleSearchOpen}>
            <i className="interface-search icon icon--sm"></i>
            <span>Search</span>
          </a>
        </div>
      </div>
    );
  }
}

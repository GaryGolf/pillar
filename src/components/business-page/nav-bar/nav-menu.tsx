import * as React from 'react';
import Logo from './logo-module';
import NavBar from '../../nav-menu/nav-bar';
interface Props {
  showCart?():void;
  showSearch?():void;
}
interface State {
  open: boolean;
  fixMenu: boolean;
}

export default class NavMenu extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      open:false,
      fixMenu: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { fixMenu } = this.state;
    if (!fixMenu && document.documentElement.scrollTop > 200) {

      this.setState({ fixMenu:true });

    } else if (fixMenu && document.documentElement.scrollTop <= 200) {

      this.setState({ fixMenu:false });

    }
  }

  handleNavOpenToggle = (event) => {
    this.setState(state => ({ open:!state.open }));
  }

  render() {
    const { open, fixMenu } = this.state;
    const { showCart, showSearch } = this.props;
    const navStyle = !open
			?	'transition--fade transition--active'
      : 'transition--fade transition--active nav-open';
      
    return (
      <nav className={navStyle} style={{ minHeight:'164px' }}>
        <div className="container nav-stack">
          <Logo/>
          <div className="row">
            <div className="col-sm-12">
              <NavBar
                fixed={fixMenu}
              />
              <div className="nav-mobile-toggle visible-sm visible-xs" 
                onClick={this.handleNavOpenToggle}>
                <i className="icon-Align-Right icon icon--sm"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

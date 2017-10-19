import * as React from 'react';
import Logo from './logo-module';
import NavBar from '../../nav-menu/nav-bar';
interface Props {}
interface State {
  open: boolean;
}

export default class NavMenu extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      open:false,
    };
  }

  handleNavOpenToggle = (event) => {
    this.setState(state => ({ open:!state.open }));
  }

  render() {
    const { open } = this.state;
    const navStyle = !open
			?	'transition--fade transition--active'
      : 'transition--fade transition--active nav-open';
      
    return (
      <nav className={navStyle} style={{ minHeight:'164px' }}>
        <div className="container nav-stack">
          <Logo/>
          <div className="row">
            <div className="col-sm-12">
              <NavBar />
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

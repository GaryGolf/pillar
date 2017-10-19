import * as React from 'react';
import NavBar from './nav-bar';
import UtilityBar from './utility-bar';

interface Props {
  transparent?: boolean;
  noUtilityBar?: boolean; 
}

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
    const { transparent, noUtilityBar } = this.props;
    const navStyle = !open
      ?	'transition--fade transition--active'
      : 'transition--fade transition--active nav-open';
    return (
      <nav className={navStyle} >
        { noUtilityBar ? null : <UtilityBar /> }
        <NavBar transparent={transparent} />
        <div className="nav-mobile-toggle visible-sm visible-xs"
          onClick={this.handleNavOpenToggle}>
          <i className="icon-Align-Right icon icon--sm"/>
        </div>
      </nav>
    );
  }
}

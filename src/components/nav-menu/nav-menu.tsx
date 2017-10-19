import * as React from 'react';
import NavBar from './nav-bar';
import UtilityBar from './utility-bar';

interface Props {
  openCart?():void;
  openSearch?():void;
}
interface State {
  open: boolean;
  fixed: boolean;
}

export default class NavMenu extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = { 
      open:false,
      fixed:false,
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

  handleNavOpenToggle = (event) => {
    this.setState(state => ({ open:!state.open }));
  }

  render() {
    const { open, fixed } = this.state;
    const navStyle = !open
      ?	'transition--fade transition--active'
      : 'transition--fade transition--active nav-open';
    return (
      <nav className={navStyle} style={{ minHeight:'119px' }}>
        <UtilityBar/>
        <NavBar 
          fixed={fixed}
        />
        <div className="nav-mobile-toggle visible-sm visible-xs"
          onClick={this.handleNavOpenToggle}>
          <i className="icon-Align-Right icon icon--sm"/>
        </div>
      </nav>
    );
  }
}

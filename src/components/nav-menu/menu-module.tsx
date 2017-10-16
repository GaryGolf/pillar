import * as React from 'react';
import Menu from './menu';
interface Props {}
interface State {
  active: string;
}

export default class MenuModule extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = { active: '' };
  }

  handleMenuToggle = (name:string) => {
    this.setState({ active: name });
  }

  render() {
    const { active } = this.state;
    return (
      <div className="nav-module menu-module left">
        <ul className="menu">
          <Menu.Home
            active={active === 'home'}
            toggle={this.handleMenuToggle}
          />
          <Menu.Pages
            active={active === 'pages'}
            toggle={this.handleMenuToggle}
          />
          <Menu.Work
            active={active === 'work'}
            toggle={this.handleMenuToggle}
          />
          <Menu.Shop
            active={active === 'shop'}
            toggle={this.handleMenuToggle}
          />
          <Menu.Blog
            active={active === 'blog'}
            toggle={this.handleMenuToggle}
          />
          <Menu.Elements
            active={active === 'elements'}
            toggle={this.handleMenuToggle}
          />
        </ul>
      </div>
    );
  }
}

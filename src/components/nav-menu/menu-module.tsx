import * as React from 'react';
import MenuTemplate from './menu-template';
const { connect } = require('react-redux');

interface Props {
  menu?: INavMenu;
}
interface State {}
@connect(
  store => ({
    menu: store.app.mainNavMenu as INavMenu,
  }),
)
export default class MenuModule extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
  }

  render() {
    const { active } = this.props.menu;

    const menuTemplate =  this.props.menu.items.map(item => (
      <MenuTemplate 
        key={item.label} 
        menu={item}
        active={active === item.label}
      />
    ));

    return (
      <div className="nav-module menu-module left">
        <ul className="menu">
          {menuTemplate}
        </ul>
      </div>
    );
  }
}

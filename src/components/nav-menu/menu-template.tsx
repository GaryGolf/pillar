import * as React from 'react';
import ChildMenu from './menu-childern-template';
import Actions from '../../actions';

interface Props {
  active: boolean;
  menu: IMenuItem;
}

export default (props:Props) => {
  
  const toggle = (event) => {
    event.preventDefault();
    if (!props.menu.children) Actions.router.push(props.menu.url);
    else Actions.app.setActiveMenu(props.active ? '' : props.menu.label);
  };

  return (
    <li className={ props.active ? 'active' : ''}>
      <a href="#" onClick={toggle}>{props.menu.label}</a>
      <ChildMenu menu={props.menu.children}/>
    </li>
  );
};

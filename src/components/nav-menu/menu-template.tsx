import * as React from 'react';
import ChildMenu from './menu-childern-template';
import { push } from '../../actions/router';
import { setActiveMenu } from '../../actions/app';

interface Props {
  active: boolean;
  menu: IMenuItem;
}

export default (props:Props) => {
  
  const toggle = (event) => {
    event.preventDefault();
    if (!props.menu.children) push(props.menu.url);
    else setActiveMenu(props.active ? '' : props.menu.label);
  };

  return (
    <li className={ props.active ? 'active' : ''}>
      <a href="#" onClick={toggle}>{props.menu.label}</a>
      <ChildMenu menu={props.menu.children}/>
    </li>
  );
};

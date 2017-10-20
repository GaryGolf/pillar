import * as React from 'react';
import ChildMenu from './menu-childern-template';
import Link from '../common/link';

interface Props {
  // active: boolean;
  // toggle(name:string): void;
  menu: IMenuItem;
}

export default (props:Props) => {
  // const activeStyle = props.active ? { className: 'active' } : null;
  
  // const toggleMenu = (event) => {
  //   event.preventDefault();
  //   if (!props.active) props.toggle('pages');
  //   else props.toggle('');
  // };

 


  return (
    <li>
      <Link to={props.menu.url ? props.menu.url : '#'} >
        {props.menu.label}
      </Link>
      <ChildMenu menu={props.menu.children}/>
    </li>
  );
};

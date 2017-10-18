import * as React from 'react';
import Link from '../../link';

interface Props {
  active: boolean;
  toggle(name:string): void;
}

export default (props:Props) => {
  
  return (
    <li>
      <Link to="/home-shop-slider">Shop</Link>
    </li>
  );
};

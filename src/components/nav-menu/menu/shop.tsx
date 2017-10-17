import * as React from 'react';
interface Props {
  active: boolean;
  toggle(name:string): void;
}

export default (props:Props) => {
  
  return (
    <li>
      <a href="/home-shop-slider">Shop</a>
    </li>
  );
};

import * as React from 'react';
interface Props {
  active: boolean;
  toggle(name:string): void;
}

export default (props:Props) => {
  
  return (
    <li>
      <a href="/shop-product-vanilla" >Shop</a>
    </li>
  );
};

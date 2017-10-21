import * as React from 'react';
import Link from 'components/common/link';

interface Props {
  active:boolean;
  toggle(name:string):void;
}

export default (props:Props) => {

  return (
    <li>
      {/* <a href="/shop-product-vanilla">Blog</a> */}
      <Link to="/shop-product-vanilla">Blog</Link>
    </li>
  );
};

import * as React from 'react';
interface Props {
  active: boolean;
  toggle(name:string): void;
}

export default (props:Props) => {
  const activeStyle = props.active ? { className: 'active' } : null;
  
  const toggleMenu = (event) => {
    event.preventDefault();
    if (!props.active) props.toggle('shop');
    else props.toggle('');
  };

  return (
    <li {...activeStyle}>
      <a href="#" onClick={toggleMenu}>Shop</a>
      <ul className="multi-column">
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Shop Layouts</span>
            </li>
            <li>
              <a href="shop-cards-small.html">Cards Small</a>
            </li>
            <li>
              <a href="shop-cards-large.html">Cards Large</a>
            </li>
            <li>
              <a href="shop-cards-sidebar.html">Cards Sidebar</a>
            </li>
            <li>
              <a href="shop-masonry-wide.html">Masonry Wide</a>
            </li>
            <li>
              <a href="shop-masonry-contained.html">Masonry Contained</a>
            </li>
            <li>
              <a href="shop-masonry-sidebar.html">Masonry Sidebar</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Product Layouts</span>
            </li>
            <li>
              <a href="shop-product-centered.html">Centered Single</a>
            </li>
            <li>
              <a href="shop-product-header.html">Image Header Single</a>
            </li>
            <li>
              <a href="shop-product-vanilla.html">Vanilla Single</a>
            </li>
            <li>
              <span className="multi-column__title">Utility Pages</span>
            </li>
            <li>
              <a href="shop-cart.html">Cart Overview</a>
            </li>
            <li>
              <a href="shop-checkout.html">Cart Checkout</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

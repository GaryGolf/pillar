import * as React from 'react'
interface Props {}

export default (props:Props) => {
  return (
    <li>
      <a href="#">Shop</a>
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
  )
}
import * as React from 'react'
import LogoModule from './logo-module'
import MenuModule from './menu-module'

interface Props {}

export default (props:Props) => {
  return (
    <div className="nav-bar" data-fixed-at="200">
      <LogoModule/>
      <MenuModule/>
      <div className="nav-module right">
        <a href="#" className="nav-function" data-notification-link="cart-overview">
          <i className="interface-bag icon icon--sm"></i>
          <span>Cart</span>
        </a>
      </div>
      <div className="nav-module right">
        <a href="#" className="nav-function modal-trigger" data-modal-id="search-form">
          <i className="interface-search icon icon--sm"></i>
          <span>Search</span>
        </a>
      </div>
    </div>
  )
}

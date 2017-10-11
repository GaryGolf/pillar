import * as React from 'react'
import LogoModule from './logo-module'
import MenuModule from './menu-module'

interface Props {
  fixed: boolean
  openCart():void
  openSearch():void
}

export default (props:Props) => {
  const handleCartOpen = e =>{
    e.preventDefault()
    props.openCart()
  }
  const handleSearchOpen = e => {
    e.preventDefault()
    props.openSearch()
  }
  const barStyle = props.fixed
    ? 'nav-bar nav--fixed'
    : 'nav-bar'
  return (
    <div className={barStyle} data-fixed-at="200">
      <LogoModule/>
      <MenuModule/>
      <div className="nav-module right">
        <a href="#" 
          className="nav-function" 
          data-notification-link="cart-overview"
          onClick={handleCartOpen}>
          <i className="interface-bag icon icon--sm"></i>
          <span>Cart</span>
        </a>
      </div>
      <div className="nav-module right">
        <a href="#" 
          className="nav-function modal-trigger" 
          data-modal-id="search-form"
          onClick={handleSearchOpen}>
          <i className="interface-search icon icon--sm"></i>
          <span>Search</span>
        </a>
      </div>
    </div>
  )
}

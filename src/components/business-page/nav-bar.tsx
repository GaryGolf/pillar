import * as React from 'react'
import MenuModule from '../nav-menu/menu-module'
import LogoModule from './logo-module'
interface Props {}
interface State {}

export default class NavBar extends React.Component <Props, State> {
  render(){
    return (
    <nav className="transition--fade transition--active" style={{minHeight: "164px"}}>
      <div className="container nav-stack">
        <LogoModule/>
        <MenuModule/>
      </div>
    </nav>
    )
  }
}
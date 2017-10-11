import * as React from 'react'
import Menu from './menu'
interface Props {}

export default (props:Props) => {
  return (
    <div className="nav-module menu-module left">
      <ul className="menu">
        <Menu.Home/>
        <Menu.Pages/>
        <Menu.Work/>
        <Menu.Shop/>
        <Menu.Blog/>
        <Menu.Elements/>
      </ul>
    </div>
  )
}
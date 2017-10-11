import * as React from 'react'
import NavMenu from '../components/nav-menu'
import SignUp from '../components/sign-up/main-container'
import Drawer from '../components/drawer'
import Search from '../components/search'
interface Props {}
interface State {}

export default class Main extends React.Component <Props, State> {
  render(){
    return (
      <div>
        <NavMenu/>
        <Drawer/>
        <Search/>
        <SignUp/>
      </div>
    )
  }
}
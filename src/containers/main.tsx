import * as React from 'react'
import NavMenu from '../components/nav-menu'
import SignUp from '../components/sign-up/main-container'
interface Props {}
interface State {}

export default class Main extends React.Component <Props, State> {
  render(){
    return (
      <div>
        <NavMenu/>
        <SignUp/>
      </div>
    )
  }
}
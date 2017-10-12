import * as React from 'react'

import Footer from '../../footer'
import About from '../about'
import NavBar from '../nav-bar/nav-menu'

interface Props {}
interface State {}

export default class MainContainer extends React.Component <Props, State> {
  render(){
    return (
      <div className="main-container transition--fade transition--active">
        <NavBar
          showCart={console.log}
          showSearch={console.log}
        />
        <About.Second/>
        <About.Features/>
        <About.First/>
        <Footer/>
      </div>
    )
  }
}
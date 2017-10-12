import * as React from 'react'

import Footer from '../../footer'
import About1 from '../about/about-1'

interface Props {}
interface State {}

export default class MainContainer extends React.Component <Props, State> {
  render(){
    return (
      <div className="main-container transition--fade transition--active">
        <About1/>
        <Footer/>
      </div>
    )
  }
}
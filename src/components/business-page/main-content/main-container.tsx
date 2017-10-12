import * as React from 'react'

import Footer from '../../footer'

interface Props {}
interface State {}

export default class MainContainer extends React.Component <Props, State> {
  render(){
    return (
      <div className="main-container transition--fade transition--active">
        <Footer/>
      </div>
    )
  }
}
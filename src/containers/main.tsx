import * as React from 'react'
import { Link } from 'react-router-dom'
interface Props {}
interface State {}

export default class Main extends React.Component <Props, State> {
  constructor(props:Props){
    super(props)
  }

  render(){
    return (
      <div>
        <div>
          <Link to={'/signup'}>Click to load Signup page</Link>
        </div>
        <div>
          <Link to={'/business'}>Busines page</Link>
        </div>
        <div>
          <Link to={'/home-shop-slider'}>Busines page</Link>
        </div>
      </div>
    )
  }
}
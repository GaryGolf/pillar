import * as React from 'react'
interface Props {}
interface State {}

const Link = (props) => {
  return <a href={props.to}>{props.children}</a>
  
}


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
          <Link to={'/home-shop-slider'}>Home Shop Slider</Link>
        </div>
      </div>
    )
  }
}
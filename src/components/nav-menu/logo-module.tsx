import * as React from 'react'
interface Props {}

export default (props:Props) => {
  return (
    <div className="nav-module logo-module left">
      <a href="index.html">
        <img className="logo logo-dark" alt="logo" src="img/logo-dark.png"/>
        <img className="logo logo-light" alt="logo" src="img/logo-light.png"/>
      </a>
    </div>
  )
}
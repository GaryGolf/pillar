import * as React from 'react'
import NavBar from './nav-bar'
import UtilityBar from './utility-bar'

interface Props {}
interface State {}

export default class NavMenu extends React.Component <Props, State> {
  render(){
	return (
	  <nav className="transition--fade transition--active" style={{minHeight: "119px"}}>
			<UtilityBar/>
			<NavBar/>
	  </nav>
	)
  }
}
import * as React from 'react'
import NavBar from './nav-bar'
import SocialList from './social-list'

interface Props {}
interface State {}

export default class NavMenu extends React.Component <Props, State> {
  render(){
	return (
	  <nav className="transition--fade transition--active" style={{minHeight: "119px"}}>
			<div className="utility-bar bg--secondary">
				<div className="nav-module left">
					<span className="type--fine-print">Web Design &amp; Development Melbourne</span>
				</div>
				<div className="nav-module left">
					<span className="type--fine-print">(03) 9282 7732</span>
				</div>
				<div className="nav-module right hidden-xs">
					<SocialList/>
				</div>
			</div>
			<NavBar/>
	  </nav>
	)
  }
}
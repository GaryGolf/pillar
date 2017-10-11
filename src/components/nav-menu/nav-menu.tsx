import * as React from 'react'
import NavBar from './nav-bar'
import UtilityBar from './utility-bar'

interface Props {
	openCart():void
}
interface State {
	open: boolean
}

export default class NavMenu extends React.Component <Props, State> {

	constructor(props:Props){
		super(props)
		this.state = {open:false}
	}

	handleNavOpenToggle = e => {
		this.setState(state=>({open:!state.open}))
	}

  render(){
		const {open} = this.state
		const navStyle = !open
			?	"transition--fade transition--active"
			: "transition--fade transition--active nav-open"
	return (
	  <nav className={navStyle} style={{minHeight: "119px"}}>
			<UtilityBar/>
			<NavBar openCart={this.props.openCart}/>
			<div className="nav-mobile-toggle visible-sm visible-xs"
				onClick={this.handleNavOpenToggle}>
				<i className="icon-Align-Right icon icon--sm"></i>
			</div>
	  </nav>
	)
  }
}
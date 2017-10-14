import * as React from 'react';
import Menu from '../nav-menu/nav-bar';

interface Props {
  showCart():void
  showSearch():void
}
interface State {
  open: boolean
  fixMenu: boolean
}

export default class NavBar extends React.Component <Props, State> {

  constructor(props:Props){
    super(props)
    this.state= {
      open:false,
      fixMenu: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('screen', this.handleScroll)
  }

  handleScroll(){
    const {fixMenu} = this.state
    if(!fixMenu && document.documentElement.scrollTop > 200) {

      this.setState({fixMenu:true})

    } else if (fixMenu && document.documentElement.scrollTop <= 200) {

      this.setState({fixMenu:false})

    }
  }
  handleNavOpenToggle = e => {
		this.setState(state=>({open:!state.open}))
	}

  render(){
    const {open, fixMenu} = this.state
    const {showCart, showSearch} = this.props
		const navStyle = !open
			?	"transition--fade transition--active"
      : "transition--fade transition--active nav-open"
      
    return (
      <nav className={navStyle} style={{minHeight:0}}>
        <div className="nav-bar nav--absolute nav--transparent" data-fixed-at="200">
          <Menu
            fixed={fixMenu}
            openCart={showCart}
            openSearch={showSearch}
          /> 
          <div className="nav-mobile-toggle visible-sm visible-xs" 
            onClick={this.handleNavOpenToggle}>
            <i className="icon-Align-Right icon icon--sm"></i>
          </div>
        </div>
      </nav>
    )
  }
}
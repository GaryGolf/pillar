import * as React from 'react'
import NavMenu from '../components/nav-menu'
import SignUp from '../components/sign-up/main-container'
import Cart from '../components/cart'
import Search from '../components/search'
interface Props {}
interface State {
  showCart: boolean
}

export default class Main extends React.Component <Props, State> {
  constructor(props:Props){
    super(props)
    this.state = {
      showCart: false
    }
  }

  handleCartClose = () => {
    this.setState({showCart:false})
  }
  handleCartOpen = () => {
    this.setState({showCart:true})
  }

  render(){
    const {showCart} = this.state
    return (
      <div>
        <NavMenu 
          openCart={this.handleCartOpen}
        />
        <Cart 
          active={showCart}
          hide={this.handleCartClose}
        />
        <Search/>
        <SignUp/>
      </div>
    )
  }
}
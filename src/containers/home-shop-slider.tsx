import * as React from 'react'

import NavBar from '../components/business-page/nav-bar'
import Content from '../components/home-shop-slider/content'
import Cart from '../components/cart'
import Search from '../components/search'
import Footer from '../components/footer'

interface Props {}
interface State {
  showCart: boolean
  showSearch: boolean
}

export default class HomeShopSlider extends React.Component <Props, State> {
  constructor(props:Props){
    super(props)

    this.state = {
      showCart: false,
      showSearch: false,
    }
  }

  handleCartClose = () => this.setState({showCart:false})
  
  handleCartOpen = () => this.setState({showCart:true})
  
  handleSearchClose = () => this.setState({showSearch:false})
  
  handleSearchOpen = () => this.setState({showSearch:true})

  render(){

    const {showCart, showSearch} = this.state

    return (
      <div className="main-container transition--fade transition--active">
        <NavBar
          showCart={this.handleCartOpen}
          showSearch={this.handleSearchOpen}
        />
        <Cart 
          active={showCart}
          hide={this.handleCartClose}
        />
        <Search
          active={showSearch}
          close={this.handleSearchClose}
        />
        <Content.Quotation/>
        <Content.Collection/>
        <Content.Features/>
        <Content.Subscribe/>
        <Footer/>
      </div>
    )
  }
}
import * as React from 'react';
import Cart from '../components/cart';
import Search from '../components/search';
import Footer from '../components/footer';
import NavMenu from '../components/nav-menu';

interface Props {}
interface State {}

export default class HomeLandingApp extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu noUtilityBar/>
        <Cart />
        <Search />
        <Footer/>           
      </div>
    );
  }
}
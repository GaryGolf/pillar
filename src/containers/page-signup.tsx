import * as React from 'react';
import NavMenu from 'components/nav-menu';
import SignUp from 'components/page-signup/main-container';
import Cart from 'components/cart';
import Search from 'components/search';

interface Props {}
interface State {}

export default class Signup extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <NavMenu />
        <Cart />
        <Search />
        <SignUp />
      </div>
    );
  }
}

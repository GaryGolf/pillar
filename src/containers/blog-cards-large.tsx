import * as React from 'react';
import NavMenu from '../components/nav-menu';
import Footer from '../components/footer';
import Cart from '../components/cart';
import Search from '../components/search';
import BlogTitle from '../components/blog-cards-large/blog-cards-title';
import BlogCards from '../components/blog-cards-large/blog-cards-masonry';

interface Props {}
interface State {}

export default class ShopProduct extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu />
        <Cart />
        <Search />
        <BlogTitle/>
        <BlogCards/>
        <Footer/>
      </div>
    );
  }
}

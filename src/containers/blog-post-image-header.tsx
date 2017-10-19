import * as React from 'react';
import Cart from '../components/cart';
import Search from '../components/search';
import Footer from '../components/footer';
import NavBar from '../components/home/nav-bar';
import BlogPostContainer from '../components/blog-post-image-header';

interface Props {}
interface State {}

export default class HomeShopSlider extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  render() {

    return (
      <div className="main-container transition--fade transition--active">
        <NavBar />
        <Cart />
        <Search />
        <BlogPostContainer/>
        <Footer/>           
      </div>
    );
  }
}

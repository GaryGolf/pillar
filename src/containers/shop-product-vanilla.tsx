import * as React from 'react';
import NavMenu from 'components/nav-menu';
import Footer from 'components/footer';
import Cart from 'components/cart';
import Search from 'components/search';
import ShopItemDetails from 'components/shop-product-vanilla/item-detail';
import RelatedProducts from 'components/shop-product-vanilla/related-products';

interface Props {
  id: string;
}
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
        <ShopItemDetails/>
        <RelatedProducts/>
        <Footer/>
      </div>
    );
  }
}

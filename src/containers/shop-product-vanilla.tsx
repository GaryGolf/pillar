import * as React from 'react';
import NavMenu from 'components/nav-menu';
import Footer from 'components/footer';
import Cart from 'components/cart';
import Search from 'components/search';
import ShopItemDetails from 'components/shop-product-vanilla/item-detail';
import RelatedProducts from 'components/shop-product-vanilla/related-products';
import Actions from 'actions';

const  collection:IProduct[] = require('api/collection.json');
const { connect } = require('react-redux');

interface State {}
interface Props {
  id: string;
}
@connect(
  store => ({
    // Product Store is not defined
  }),
)
export default class ShopProduct extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }



  render() {
    const { id } = this.props;
    const product:IProduct = collection
      .find(item => item.id === id);

    const related:IProduct[] = collection
      .filter(item => item.id !== id)
      .slice(0,3);

    if (!product) {
      Actions.router.goToShop(); 
      return null;
    }

    document.documentElement.scrollTop = 0;

    return (
      <div className="main-container transition--fade transition--active">
        <NavMenu />
        <Cart />
        <Search />
        <ShopItemDetails product={product}/>
        <RelatedProducts collection={related}/>
        <Footer/>
      </div>
    );
  }
}

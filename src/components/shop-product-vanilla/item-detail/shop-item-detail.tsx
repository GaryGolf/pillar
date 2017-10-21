import * as React from 'react';
import Actions from 'actions';
import Slider from './shop-item-slider';
import ShopForm from './shop-item-form';
interface Props {
  product:IProduct;
}

export default (props:Props) => {
  if (!props.product) return null;

  const submit = (quantity:number) => {
    const { product } = props;
    Actions.app.addItemToCart({ product, quantity });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="shop-item-detail shop-item-detail-1">
            <div className="col-sm-6">
              <Slider src={props.product.featuredImage.src}/>
            </div>
            <div className="col-md-4 col-md-offset-1 col-sm-6">
              <ShopForm
                product={props.product}
                onSubmit={submit}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

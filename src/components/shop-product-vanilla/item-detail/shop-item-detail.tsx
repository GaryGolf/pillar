import * as React from 'react';
import Slider from './shop-item-slider';
import ShopForm from './shop-item-form';
interface Props {}

export default (props:Props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="shop-item-detail shop-item-detail-1">
            <div className="col-sm-6">
              <Slider/>
            </div>
            <div className="col-md-4 col-md-offset-1 col-sm-6">
              <ShopForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

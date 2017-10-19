import * as React from 'react';
import { money } from '../../../helpers/utils';
const json: CollectionItem[] = require('../../../api/collection.json');

interface Props {}

interface CollectionItem {
  id: string;
  name: string;
  price: number;
  productId: string;
  totalDiscount: number;
  productVariantId: string;
  featuredImage: {
    src: string;
  };
}


export default (props:Props) => {

  const shop = json.map(item => (
    <div key={item.name} 
      className={`col-md-4 col-sm-6 masonry__item`}
      // filter-${item.filter}`}
      // data-masonry-filter={item.filter}
    >
      <a href="#">
        <div className="shop-item shop-item-1">
          <div className="shop-item__price hover--reveal">
            {
              !item.totalDiscount ? null 
              : <span className="type--strikethrough">
                {money(item.price + item.totalDiscount)}
                </span>
            }
            <span>{money(item.price)}</span>
          </div>
          <div className="shop-item__image">
            <img alt="product" src={item.featuredImage.src}/>
          </div>
          <div className="shop-item__title">
            <h5>{item.name}</h5>
          </div>
        </div>
      </a>
    </div>
  ));

  return (
    <section className="masonry-contained shop-home">
      <div className="container">
        <div className="row">
          <div className="masonry masonry-shop">
            <div className="masonry__container masonry--animate masonry--active" 
              style={{ position:'relative',height:'842px' }}>
              {shop}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <a className="btn" href="#">
              <span className="btn__text">
                View Full Collection
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import * as React from 'react';
import Actions from 'actions';
import { money } from 'helpers/utils';

interface Props {
  id: string;
  collection: IProduct[];
}

export default (props:Props) => {
  const { id, collection } = props;
  const { showProductCard }  = Actions.router;
  if (!id || !collection) return null;

  const relatedProducts = collection
    .filter(item => item.id !== id)
    .slice(0,3)
    .map((product:IProduct) => {
      const oldPrice = !product.totalDiscount ? null :  (
        <span className="type--strikethrough">
          {money(product.price + product.totalDiscount)}
        </span>
      );
      return (
        <div key={product.id} className="col-sm-4">
          <a href="#"  onClick={(e) => {e.preventDefault(); showProductCard(product.id);}}>
            <div className="shop-item shop-item-1">
              <div className="shop-item__price hover--reveal">
                {oldPrice}
                <span>{money(product.price)}</span>
              </div>
              <div className="shop-item__image">
                <img alt="product" src={product.featuredImage.src}/>
              </div>
              <div className="shop-item__title"><h5>{product.name}</h5></div>
            </div>
          </a>
        </div>
      );
    });

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="related-products">
            <div className="col-sm-12"><h4>Related Products</h4></div>

              {relatedProducts}

          </div>
        </div>
      </div>
    </section>
  );
};

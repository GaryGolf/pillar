import * as React from 'react';

interface Props {}

export default (props:Props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="related-products">
            <div className="col-sm-12"><h4>Related Products</h4></div>

            <div className="col-sm-4">
              <a href="#">
                <div className="shop-item shop-item-1">
                  <div className="shop-item__price hover--reveal">
                    <span className="type--strikethrough">$89.00</span>
                    <span>$69.00</span>
                  </div>
                  <div className="shop-item__image">
                    <img alt="product" src="/img/product-large-2.jpg"/>
                  </div>
                  <div className="shop-item__title"><h5>Earl Sweatshirt</h5></div>
                </div>
              </a>
            </div>

            <div className="col-sm-4">
              <a href="#">
                <div className="shop-item shop-item-1">
                  <div className="shop-item__price hover--reveal">
                    <span className="type--strikethrough">$329.00</span>
                    <span>$299.00</span>
                  </div>
                  <div className="shop-item__image">
                    <img alt="product" src="/img/product-large-7.jpg"/>
                  </div>
                  <div className="shop-item__title">
                    <h5>Bruce Leather Shoes</h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-sm-4">
              <a href="#">
                <div className="shop-item shop-item-1">
                  <div className="shop-item__price hover--reveal">
                    <span>$59.00</span>
                  </div>
                  <div className="shop-item__image">
                    <img alt="product" src="/img/product-large-4.jpg"/>
                  </div>
                  <div className="shop-item__title">
                    <h5>Bonnie Denim Tote</h5>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="shop-item-detail shop-item-detail-1">
            <div className="col-sm-6">
              <div className="slider" data-animation="fade" data-arrows="true" data-paging="true">
                <img alt="product" src="img/product-single-2.jpg"/>
              </div>
            </div>
            <div className="col-md-4 col-md-offset-1 col-sm-6">
              <div className="item__title">
                <h4>Lucas Wrist Watch</h4>
              </div>
              <div className="item__price">
                <span className="type--strikethrough">$249.00</span>
                <span>$189.00</span>
              </div>
              <form className="item__addtocart">
                <input type="text" value="1" name="quantity"/>
                <button type="submit" className="btn btn--primary">Add To Cart</button>
              </form>
              <div className="item__description">
                <h6>Description:</h6>
                <p>
                  A sturdy, handwoven fabric makes this American Apparel indigo-T a dependable addition 
                  to your casual wardrobe. This is a no bullshit plain ol’ t-shirt.
                </p>
              </div>
              <div className="item__description">
                <h6>Information:</h6>
                <div className="item__subinfo">
                  <span>Fabric</span>
                  <span>100% Cotton</span>
                </div>
                <div className="item__subinfo">
                  <span>Origin</span>
                  <span>Handmade in Aus</span>
                </div>
                <div className="item__subinfo">
                  <span>Weight</span>
                  <span>280gm - 340gm</span>
                </div>
                <div className="item__subinfo">
                  <span>Sizes</span>
                  <span>S,M,L,XL</span>
                </div>
                <div className="item__subinfo">
                  <span>SKU</span>
                  <span>472843-4</span>
                </div>
              </div>
              <div className="item__description">
                <hr/>
                <ul className="social-list">
                  <li>
                    <a href="#">
                      <i className="socicon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="socicon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="socicon-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="socicon-stumbleupon"></i>
                    </a>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

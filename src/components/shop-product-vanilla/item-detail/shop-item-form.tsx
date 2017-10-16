import * as React from 'react';
interface Props {}
interface State {}

export default class ShopForm extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="item__title"><h4>Lucas Wrist Watch</h4></div>
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
            A sturdy, handwoven fabric makes this American Apparel indigo-T 
            a dependable addition to your casual wardrobe. This is a no 
            bullshit plain ol’ t-shirt.
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
              <a href="#"><i className="socicon-twitter"/></a>
            </li>
            <li>
              <a href="#"><i className="socicon-facebook"/></a>
            </li>
            <li>
              <a href="#"><i className="socicon-pinterest"/></a>
            </li>
            <li>
              <a href="#"><i className="socicon-stumbleupon"/></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

import * as React from 'react';
interface Props {
  onSubmit(quantity:number):void;
}
interface State {
  quantity: number;
}

export default class ShopForm extends React.PureComponent <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = { quantity:1 };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.quantity);
  }
  handleQuantityChange = (event) => {
    const quantity = event.target.value;
    if (isNaN(quantity)) return;
    this.setState({ quantity });
  }
  render() {
    const { quantity } = this.state;
    return (
      <div>
        <div className="item__title"><h4>Lucas Wrist Watch</h4></div>
        <div className="item__price">
          <span className="type--strikethrough">$249.00</span>
          <span>$189.00</span>
        </div>
        <form className="item__addtocart" onSubmit={this.handleSubmit}>
          <input type="text" 
            name="quantity"
            value={quantity}
            onChange={this.handleQuantityChange}
          />
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

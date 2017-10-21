import * as React from 'react';
import { money } from 'helpers/utils';

interface Props {
  product: IProduct;
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
    this.setState({ quantity: Number.parseInt(quantity) });
  }
  render() {
    const { quantity } = this.state;
    const { product } = this.props;

    const oldPrice = !product.totalDiscount ? null :  (
      <span className="type--strikethrough">
        {money(product.price + product.totalDiscount)}
      </span>
    );
    
    const description = !product.description ? null : (
      <div className="item__description">
        <h6>Description:</h6>
        <p>{product.description}</p>
      </div>
    );

    const information = !product.information ? null : (
      <div className="item__description">
        <h6>Information:</h6>
        {
          Object.keys(product.information)
            .map(label => (
              <div key={label} className="item__subinfo">
                <span>{label}</span>
                <span>{product.information[label]}</span>
              </div>
            ))
        }
      </div>
    );


    return (
      <div>
        <div className="item__title"><h4>{product.name}</h4></div>
        <div className="item__price">
          {oldPrice}
          <span>{money(product.price)}</span>
        </div>
        <form className="item__addtocart" onSubmit={this.handleSubmit}>
          <input type="text" 
            name="quantity"
            value={quantity}
            onChange={this.handleQuantityChange}
          />
          <button type="submit" className="btn btn--primary">Add To Cart</button>
        </form>
        {description}
        {information}
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

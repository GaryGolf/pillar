import * as React from 'react';
import Actions from 'actions';
import { money } from 'helpers/utils';
const { connect } = require('react-redux');

interface Props {
  active?: boolean;
  cart?: ICart;
}
interface State {}

@connect(
  store => ({
    active: store.app.showSlideOutCart as boolean,
    cart: store.app.cart as ICart,
  }),
)
export default class SlideOutCrt extends React.Component <Props,State> {
  render() {
    const { active, cart } = this.props;
    const { hideCart, removeCartItem } = Actions.app;
    if (!active || !cart) return null;
    const cartStyle = active
      ? 'notification pos-right pos-top cart-overview notification--reveal'
      : 'notification pos-right pos-top cart-overview notification--reveal notification--dismissed';

    const cartItems = cart.items.map(item => (

      <li key={item.id}>
        <div className="item__image">
          <a href="#">
            <img alt="product" src={item.featuredImage.src}/>
          </a>
        </div>
        <div className="item__detail">
          <span>{item.name}</span>
            <span className="h6">{item.quantity} x {money(item.price)}</span>
          </div>
          <div className="item__remove" title="Remove From Cart"
            onClick={() => removeCartItem(item.id)}
          />
      </li>
    ));

    return (
      <div className={cartStyle} data-notification-link="cart-overview" data-animation="from-right">
        <div className="cart-overview__title">
          <h5>Your Cart</h5>
        </div>
        <ul className="cart-overview__items">{cartItems}</ul>

        <div className="cart-overview__subtotal">
          <h5>Subtotal:</h5>
          <span>{money(cart.subtotal)}</span>
        </div>
        <div className="cart-overview__action">
          <a href="#" className="btn btn--square btn--primary">
            <span className="btn__text">Checkout Now</span>
          </a>
        </div>
        <div className="notification-close-cross notification-close"
          onClick={hideCart}
        />
      </div>
    );
  }
}

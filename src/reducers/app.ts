import * as ActionTypes from '../actions/types';
const jsonMenu:INavMenu = require('../api/menu.json');
import appConfig from '../api/app-config';

interface Action {
  type: string;
  payload?: any;
}

/*
declare interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  productId: string;
  totalDiscount: number;
  productVariantId: string;
  featuredImage: {
     src: string;
  };
}

declare interface ICart {
  total: number;
  subtotal: number;
  totalTax: number;
  totalDiscount: number;
  currency: CurrencyCode;
  items: Array<ICartItem>;
}

declare type AppState = {
  cart: ICart;
  showSearch: boolean;
  mainNavMenu: INavMenu;
  showSlideOutCart: boolean;
}
*/

const cartItems: ICartItem[] = [
  {
    id: '1',
    name: 'Dave Wool Beanie',
    price: 39,
    quantity: 1,
    productId: 'SCU2452345',
    totalDiscount: 0,
    productVariantId: '',
    featuredImage: {
      src: 'img/product-small-1.png',
    },
  },
  {
    id: '2',
    name: 'Rose Tinted Glasses',
    price: 89,
    quantity: 1,
    productId: 'SCU24523455',
    totalDiscount: 0,
    productVariantId: '',
    featuredImage: {
      src: 'img/product-small-2.png',
    },
  },
];

const initialCart: ICart = {
  total: 128,
  subtotal: 128,
  totalTax: 0,
  totalDiscount: 0,
  currency: 'USD',
  items: cartItems,
};

const initialState = {
  cart: initialCart,
  showSearch: false,
  mainNavMenu: jsonMenu,
  showSlideOutCart: false,
  appConfig
};

export function app(state = initialState, action: Action): AppState {

  switch (action.type) {

    // Cart
    case ActionTypes.SHOW_CART :
      return { ...state, showSlideOutCart: true };

    case ActionTypes.HIDE_CART :
      return { ...state, showSlideOutCart: false };

    case ActionTypes.ADD_ITEM_TO_CART : {
      const product = action.payload;
      const items = [...state.cart.items];
      const exist = items.find(item => item.id === product.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        items.push({ ...product, quantity: 1 });
      }
      const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price,0);
      const cart = { ...state.cart, items, subtotal };
      return { ...state, cart };
    }

    case ActionTypes.REMOVE_CART_ITEM : {
      const items = state.cart.items.filter(item => item.id !== action.payload);
      const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price,0);
      const cart = { ...state.cart, items, subtotal };
      return { ...state, cart };
    }

    // Search
    case ActionTypes.SHOW_SEARCH :
      return { ...state, showSearch: true };

    case ActionTypes.HIDE_SEARCH :
      return { ...state, showSearch: false };

    // Menu
    case ActionTypes.SET_ACTIVE_MENU : {
      const active = action.payload;
      const mainNavMenu = { ...state.mainNavMenu, active };
      return { ...state, mainNavMenu };
    }

    default :
  }
  return state;
}

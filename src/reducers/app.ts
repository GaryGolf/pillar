import * as ActionTypes from '../actions/types';

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

const initialState = {
  cart: null,
  showSearch: false,
  mainNavMenu: null,
  showSlideOutCart: false,  
};

export function app(state = initialState, action: Action): AppState {
  
  switch (action.type) {

    // Slide out cart
    case ActionTypes.SHOW_CART :
      return { ...state, showSlideOutCart: true };
    
    case ActionTypes.HIDE_CART :
      return { ...state, showSlideOutCart: false };
    
    // Search
    case ActionTypes.SHOW_SEARCH :
      return { ...state, showSearch: true };
    
    case ActionTypes.HIDE_SEARCH :
      return { ...state, showSearch: false };

    default :
  }
  return state;
}

import * as Actions from '../constants/actions';

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
    case Actions.SHOW_SLIDE_OUT_CART :
      if(!action.payload) return { ...state, showSlideOutCart: false };
      return { ...state, showSlideOutCart: true };
    
    // Search
    case Actions.SHOW_SEARCH :
      if (!action.payload) return { ...state, showSearch: false };
      return { ...state, showSearch: true };
      
    default :
  }
  return state;
}

import * as Actions from '../constants/actions';
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

export function app(state = initialState, action): AppState {
  
  switch (action.type) {
    case Actions.DO_NOTHING:
    default :
  }
  return state;
}

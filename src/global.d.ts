/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.json' {
  const json: any;
  export = json;
}

// for redux devtools extension
declare interface Window {
  devToolsExtension?(): (args?: any) => any;
}
// enviroment constant
declare const PRODUCTION: boolean
declare const NODE_ENV: any

declare interface INavMenu {
   name: 'Main' | 'Footer';
   items: Array<{
      label: string;
      url?: string;
      children: Array<{
         label: string;
         url: string;
      }>
   }>
}

declare type CurrencyCode = 'USD';

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
   showSlideUpCart: boolean;
   navMenus: Array<INavMenu>;
}
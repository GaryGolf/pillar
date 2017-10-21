declare interface BlogCardLarge {
  image: string;
  type: string;
  title: string;
  note: string;
  by: string;
}

declare interface  IMenuItem {
  label:  string;
  url?: string;
  children?: IMenuItem[];
}

declare interface INavMenu {
  name: 'Main' | 'Footer';
  active: string; // label of active menu item
  items: IMenuItem[];
}

/*

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
*/
declare type CurrencyCode = 'USD' | 'GBP';

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

declare interface AppConfig {
   ecommerce: {
      currencyCode: CurrencyCode;
   };
   social?: null | {
      FacebookURL?: string;
      InstagramURL?: string;
      YouTubeURL?: string;
      TwitterURL?: string;
      LinkedInURL?: string;
      FlickrURL?: string;
      TripAdvisorURL?: string;
      VimeoURL?: string;
      GooglePlusURL?: string;
      PinterestURL?: string;
   };
   theme: {
      primaryColor: string;
   };
}

declare type AppState = {
   cart: ICart;
   showSearch: boolean;
   mainNavMenu: INavMenu;
   showSlideOutCart: boolean;
   appConfig: AppConfig;
}

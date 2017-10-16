import * as React from 'react';
interface Props {}

interface Product {
  name: string;
  photo: string;
  price: string;
  last_price?: string;
  filter: 'Accessories' | 'apparel';
}

export default (props:Props) => {
  const products: Product[] = [
    {
      name: 'Lucas Wrist Watch',
      photo: 'img/product-large-5.jpg',
      price: '$299.00',
      last_price: '$329.00',
      filter: 'Accessories',
    },
    {
      name: 'Dave Wool Beanie',
      photo: 'img/product-large-3.jpg',
      price: '$34.00',
      filter: 'apparel',
    },
    {
      name: 'Earl Sweatshirt',
      photo: 'img/product-large-2.jpg',
      price: '$49.00',
      last_price: '$89.00',
      filter: 'Accessories',
    },
    {
      name: 'Logan Slub Tee',
      photo: 'img/product-large-8.jpg',
      price: '$59.00',
      filter: 'apparel',
    },
    {
      name: 'Hunter Formal Shirt',
      photo: 'img/product-large-9.jpg',
      price: '$109.99',
      filter: 'apparel',
    },
    {
      name: 'Kenneth Leather Wallet',
      photo: 'img/product-large-10.jpg',
      price: '$75.00',
      filter: 'Accessories',
    },
  ];
  const shop = products.map(item => (
    <div key={item.name} 
      className={`col-md-4 col-sm-6 masonry__item filter-${item.filter}`}
      data-masonry-filter={item.filter}>
      <a href="#">
        <div className="shop-item shop-item-1">
          <div className="shop-item__price hover--reveal">
            {
              !item.last_price ? null 
              : <span className="type--strikethrough">{item.last_price}</span>
            }
            <span>{item.price}</span>
          </div>
          <div className="shop-item__image">
            <img alt="product" src={item.photo}/>
          </div>
          <div className="shop-item__title">
            <h5>{item.name}</h5>
          </div>
        </div>
      </a>
    </div>
  ));

  return (
    <section className="masonry-contained shop-home">
      <div className="container">
        <div className="row">
          <div className="masonry masonry-shop">
            <div className="masonry__container masonry--animate masonry--active" 
              style={{ position:'relative',height:'842px' }}>
              {shop}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <a className="btn" href="#">
              <span className="btn__text">
                View Full Collection
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

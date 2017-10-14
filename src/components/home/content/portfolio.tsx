import * as React from 'react';
interface Props {};

export default (props:Props) => {
  return (
    <section className="masonry-contained">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h6>Recent Work</h6>
          </div>
        </div>
        <div className="row">
          <div className="masonry">
            <div className="masonry__container masonry--animate masonry--active">
              <div className="col-sm-6 masonry__item filter-digital" data-masonry-filter="digital" >
                <a href="#">
                  <div className="card card-3">
                    <div className="card__image">
                      <img alt="Pic" src="img/work18.jpg"/>
                    </div>
                    <div className="card__body boxed bg--white">
                      <div className="card__title">
                        <h5>Yield</h5>
                      </div>
                      <span>
                        <em>Digital Storefront</em>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!--end item--> */}
              <div className="col-sm-6 masonry__item filter-digital" data-masonry-filter="digital" >
                <a href="#">
                  <div className="card card-3">
                    <div className="card__image">
                      <img alt="Pic" src="img/work12.jpg"/>
                    </div>
                    <div className="card__body boxed bg--white">
                      <div className="card__title">
                        <h5>Tesla Remote</h5>
                      </div>
                      <span>
                        <em>Apple Watch Application</em>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!--end item--> */}
              <div className="col-sm-6 masonry__item filter-digital" data-masonry-filter="digital" >
                <a href="#">
                  <div className="card card-3">
                    <div className="card__image">
                      <img alt="Pic" src="img/work14.jpg"/>
                    </div>
                    <div className="card__body boxed bg--white">
                      <div className="card__title">
                        <h5>Pillar Website</h5>
                      </div>
                      <span>
                        <em>Digital Presence</em>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!--end item--> */}
              <div className="col-sm-6 masonry__item filter-packaging" data-masonry-filter="packaging" >
                <a href="#">
                  <div className="card card-3">
                    <div className="card__image">
                      <img alt="Pic" src="img/work5.jpg"/>
                    </div>
                    <div className="card__body boxed bg--white">
                      <div className="card__title">
                        <h5>Authentic Apparel</h5>
                      </div>
                      <span>
                        <em>Product Packaging</em>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!--end item--> */}
            </div>
            {/* <!--end masonry container--> */}
          </div>
        </div>
        {/* <!--end of row--> */}
      </div>
      {/* <!--end of container--> */}
    </section>
  );
};
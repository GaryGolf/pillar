import * as React from 'react';
interface Props {}

export default (rops:Props) => {
  return (
    <section className="section--overlap">
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-sm-6">
            <div className="pricing pricing-4">
              <div className="pricing__price">
                <span className="h1">Free</span>
              </div>
              <h6>Starter</h6>
              <hr/>
              <p>
                A no-commitment plan for hobbyists and tinkerers 
                looking to experiment with design.
              </p>
              <a className="btn" href="#">
                <span className="btn__text">
                  Download Now
                </span>
              </a>
            </div>
          </div> {/* <!--end pricing--> */}

          <div className="col-md-4 col-sm-6">
            <div className="pricing pricing-4">
              <div className="pricing__price">
                <span className="pricing__dollar h5">$</span>
                <span className="h1">19</span>
              </div>
              <h6>Freelance</h6>
              <hr/>
              <p>
                A commercial-use licence that comes with the addition 
                of 6 months free support.
              </p>
              <a className="btn" href="#">
                <span className="btn__text">
                  Purchase Now
                </span>
              </a>
            </div>
          </div> {/* <!--end pricing--> */}

          <div className="col-md-4 col-sm-6">
            <div className="pricing pricing-4">
              <div className="pricing__price">
                <span className="pricing__dollar h5">$</span>
                <span className="h1">69</span>
              </div>
              <h6>Agency</h6>
              <hr/>
              <p>
                Unlimited commercial use licence ideal for agencies and 
                corporate customers.
              </p>
              <a className="btn" href="#">
                <span className="btn__text">
                  Purchase Now
                </span>
              </a>
            </div>
          </div> {/* <!--end pricing--> */}

        </div>
      </div>
    </section>
  );
};

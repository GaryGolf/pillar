import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <section className="bg--primary space--even">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="feature feature-1">
              <i className="icon icon-Ship"></i>
              <h6>New Startups</h6>
              <p>
                Grok integrate thinker-maker-doer piverate entrepreneur sticky 
                note iterate waterfall is so 2000 and late 360 campaign cortado 
                quantitative vs. qualitative.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature feature-1">
              <i className="icon icon-Fingerprint-2"></i>
              <h6>Personal Portfolios</h6>
              <p>
                Grok integrate thinker-maker-doer piverate entrepreneur sticky 
                note iterate waterfall is so 2000 and late 360 campaign cortado 
                quantitative vs. qualitative.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature feature-1">
              <i className="icon icon-Shop-2"></i>
              <h6>Online Storefronts</h6>
              <p>
                Grok integrate thinker-maker-doer piverate entrepreneur sticky 
                note iterate waterfall is so 2000 and late 360 campaign cortado 
                quantitative vs. qualitative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

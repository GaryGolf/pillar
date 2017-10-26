import * as React from 'react';

interface Props {}

export default (props:Props) => {
  return (
    <section className="features features-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>Bold, Simple, Robust.</h3>
            <p className="lead">
              Pillar features a bevvy of content blocks and layouts to create your website.
            </p>
          </div>
          <div className="col-md-5 col-md-offset-1 col-sm-6">
            <div className="feature feature-2">
              <div className="feature__title">
                <i className="icon icon-Orientation-2"/>
                <h6>Beautifully Responsive</h6>
              </div>
              <p>
                Every one of Pillar’s stylish blocks are fully responsive,meaning that your 
                site shines - regardless of the device your users are viewing from.
              </p>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="feature feature-2">
              <div className="feature__title">
                <i className="icon icon-People-onCloud"/>
                <h6>Six Months Free Support</h6>
              </div>
              <p>
                Each purchase of Pillar comes with six months of our much-lauded customer 
                support. We have our own dedicated support forum setup to help you.
              </p>
            </div>
          </div>
          <div className="col-sm-12">
            <img alt="device" src="img/device1.png"/>
          </div>
        </div>
      </div>
    </section>
  );
};

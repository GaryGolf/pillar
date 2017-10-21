import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <section className="bg--secondary imageblock features features-1">
      <div className="imageblock__content col-md-5 col-sm-3 pos-left">
        <div className="background-image-holder" 
          style={{ background:'url(img/hero8.jpg)', opacity:1 }}>
          <img alt="image" src="/img/hero8.jpg"/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-push-6 col-sm-8 col-sm-push-4">
            <h3>Diverse, Beautiful Components</h3>
            <p className="lead">
              Pillar features a bevy of content blocks
              <br className="visible-md visible-lg"/> 
              and layouts to create your website.
            </p>
            <hr/>
            <div className="col-xs-6">
              <div className="feature feature-1">
                <i className="icon icon-Fingerprint"/>
                <h5>Over 2,000 Icons</h5>
                <p>Pillar includes the Icons Mind kit with each purchase.</p>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="feature feature-1">
                <i className="icon icon-Support"/>
                <h5>Support Included</h5>
                <p>Each Pillar purchase comes with 6 months support included.</p>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="feature feature-1">
                <i className="icon icon-Astronaut"/>
                <h5>Perfect for startups</h5>
                <p>Including tons of vibrant, carefully styled componenents.</p>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="feature feature-1">
                <i className="icon icon-Bag-Coins"/>
                <h5>E-commerce styling</h5>
                <p>Beautiful product pages and unique sidebar cart included.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import * as React from 'react';

interface Props {}

export default (props:Props) => {

  const imageHolerClass = 'col-md-4 col-md-push-4 col-md-offset-0 ' +
    ' col-sm-6 col-sm-offset-3 text-center';

  return (
    <section className="features features-9">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>Showcase Features &amp; Benefits</h3>
            <p className="lead">
              Pillar features a bevvy of content blocks and layouts to create your website.
            </p>
          </div>
        </div>

        <div className="row">
          <div className={imageHolerClass}>
            <img alt="device" src="/img/device2.png"/>
          </div>
          <div className="col-md-3 col-md-pull-4 col-sm-6 col-xs-6 text-right text-left-xs">
            <div className="feature feature-1">
              <i className="icon icon-Fingerprint-2"></i>
              <h5>Over 2,000 Icons</h5>
              <p>Pillar includes the Icons Mind kit with each purchase.</p>
            </div>
            <div className="feature feature-1">
              <i className="icon icon-Approved-Window"/>
              <h5>Intuitive Markup</h5>
              <p>Focussed on readability and performance: Tinker on!</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 col-md-push-2">
            <div className="feature feature-1">
              <i className="icon icon-Support"/>
              <h5>Top Notch Support</h5>
              <p>Each purchase of Pillar includes 6 months of support.</p>
            </div>
            <div className="feature feature-1">
              <i className="icon icon-Box-Open"/>
              <h5>Builder Included</h5>
              <p>Assemble pages with the included Variant Page Builder.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

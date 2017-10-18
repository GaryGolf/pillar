import * as React from 'react';
interface Props {}

export default (prop:Props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
            <h3>Working to build a better web.</h3>
            <p className="lead">
              Pillar combines smart, modern styling with all the features you’ll need to 
              launch websites of almost any kind. Achieve results faster than ever with 
              the included Variant Page Builder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

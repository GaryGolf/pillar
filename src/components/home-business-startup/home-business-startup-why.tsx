import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
  <section className="space-bottom--sm">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
          <h3>Why do people love Pillar?</h3>
            <p className="lead">
              Built for designers and developers alike, Pillar combines an engaging look 
              with squeaky-clean code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

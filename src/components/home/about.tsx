import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <section className="bg--dark section--even">
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <h6>Digital, Delivered.</h6>
            <p className="lead">
              We are a global design agency specialising in the art 
              of brand storytelling. We craft digital, graphic and 
              3 dimensional thinking, to create category leading brand experiences 
              that have meaning, relevance and deliver extraordinary value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

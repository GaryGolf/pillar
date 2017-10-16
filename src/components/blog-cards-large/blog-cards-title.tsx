import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <section className="height-50  page-title page-title--animate">
      <div className="container pos-vertical-center">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>Blog Cards</h1>
            <p className="lead">Showcase blog posts in a sylish grid arrangement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

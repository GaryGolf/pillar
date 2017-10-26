import * as React from 'react';

interface Props {}

export default (props:Props) => {
  return (
    <section className="cover cover-9">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <img alt="Logo" className="logo" src="/img/logo-large-dark.png"/>
            <p className="lead">
              A stunning collection of
              <br/> front-end web components.
            </p>
            <a className="btn btn--primary" href="#">
              <span className="btn__text">
                Take A Tour
              </span>
            </a>
            <a className="btn" href="#">
              <span className="btn__text">
                <i className="socicon-apple"></i> Get It On The App Store
              </span>
            </a>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-12 text-center">
              <img className="cover__image" alt="Device" src="/img/device1.png"/>
            </div>
        </div>
      </div>
    </section>
  );
};

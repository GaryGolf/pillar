import * as React from 'react';

interface Props {}

export default (props:Props) => {
  
  const imageHolderStyle = {
    transform: 'translate3d(0px, 185.5px, 0px)',
    background: 'url(/img/hero4.jpg)',
    opacity: 1,
  };

  return (
    <section className="imagebg section--even parallax" data-overlay="5">
      <div className="background-image-holder" style={imageHolderStyle}>
        <img alt="image" src="/img/hero4.jpg"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <a className="btn" href="#">
              <span className="btn__text">
                <i className="socicon-apple"></i>&nbsp; Download for iOS
              </span>
            </a>
            <a className="btn" href="#">
              <span className="btn__text">
                <i className="socicon-play"></i>&nbsp; Download for Android
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

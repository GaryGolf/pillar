import * as React from 'react';
interface Props {};

export default (props:Props) => {
  return (
    <section className="imagebg section--even" data-overlay="8">
      <div className="background-image-holder" style={{background:"url(img/hero11.jpg)",opacity:1}}>
        <img alt="image" src="img/hero11.jpg"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h6>Work With Pillar</h6>
            <p className="lead">A global design agency specialising in the art of brand storytelling</p>
            <a className="btn btn--sm" href="#">
              <span className="btn__text">
                Arrange A Consultation
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

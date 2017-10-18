import * as React from 'react';
interface Props {}

export default (props:Props) => {
  const imageHolderStyle = { 
    transform:'translate3d(0px, 0px, 0px)',
    background:'url(img/hero16.jpg)', 
    opacity:1, 
    top:0,
  };
  return (
    <section className="height-70 bg--dark imagebg page-title page-title--animate parallax" data-overlay="6">
      <div className="background-image-holder" style={imageHolderStyle}>
        <img alt="image" src="img/hero16.jpg"/>
      </div>
      <div className="container pos-vertical-center">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <h3>Let's make something great</h3>
            <p className="lead">
              Pillar is a team of passionate designers, developers and 
              artists working in print and digital. We collaborate with 
              clients to establish bold, effective identities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

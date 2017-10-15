import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <section className="imagebg videobg height-100 video-active" data-overlay="5">
      
      <video id="bgvid"
        poster="http://thenewcode.com/assets/images/polina.jpg"  
        playsInline autoPlay muted loop>
        <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm"/>
        <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4"/>
      </video>

      <div className="background-image-holder" 
        style={{ background:'url(img/hero27.jpg)', opacity:1 }}>
        <img alt="image" src="img/hero27.jpg"/>
      </div>
      <div className="container pos-vertical-center">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <p className="lead">
              Pillar is a Chicago-based collective of passionate designers, 
              developers and brand strategists offering insight to some of 
              the world's most admired brands.
            </p>
          </div>
        </div>
      </div>
      <div className="loading-indicator"/>
    </section>
  );
};

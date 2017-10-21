import * as React from 'react';
interface Props {}

export default (props:Props) => {
  const imageStyle = {
    transform: 'translate3d(0px, 0px, 0px)', 
    background: 'url(img/hero25.jpg)', 
    opacity: 1, 
    top: 0,
  };
  return (
    <div className="blog-post__title imagebg parallax" data-overlay="5">
      <div className="background-image-holder" style={imageStyle}>
        <img alt="Pic" src="/img/hero25.jpg"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
            <h1>Advice for stirring your online community</h1>
            <div className="blog-post__author">
              <span>
                <em>by </em>
              </span>
              <span className="h6">Abby Bollard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

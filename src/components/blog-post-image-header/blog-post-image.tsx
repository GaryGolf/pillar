import * as React from 'react';
import { Parallax } from 'react-parallax';
interface Props {}

export default (props:Props) => {
  
  return (
    <Parallax bgImage="/img/hero25.jpg" strength={200}>
      <div className="blog-post__title imagebg parallax" data-overlay="5">
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
    </Parallax>
  );
};

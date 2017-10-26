import * as React from 'react';
import { Parallax, Background } from 'react-parallax';

interface Props {}

export default (props:Props) => {
  
  return (
    <Parallax bgImage="/img/hero4.jpg" strength={200}> 
      <section className="imagebg section--even parallax" data-overlay="5">
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
    </Parallax>
  );
};

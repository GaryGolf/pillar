import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <div className="col-sm-12 masonry__item">
      <a href="#">
        <div className="card card--horizontal card-6">
          <div className="card__image col-sm-7 col-md-8">
            <div className="background-image-holder" 
              style={{ background:'url(img/small9.jpg)', opacity:1 }}>
              <img alt="Pic" src="img/small9.jpg"/>
            </div>
          </div>
          <div className="card__body col-sm-5 col-md-4 boxed boxed--lg bg--white">
            <h6>Marketing</h6>
            <div className="card__title">
              <h4>Advice for stirring your online community and fostering engagement</h4>
            </div>
            <p>
              Sticky note agile personas engaging ship it ideate disrupt earned media.
            </p>
            <hr/>
            <div className="card__lower">
              <span>by</span>
              <span className="h6">Abby Bollard</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

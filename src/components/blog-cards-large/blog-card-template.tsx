import * as React from 'react';

export default (props:BlogCardLarge) => {

  return (
    <div className="col-sm-12 masonry__item">
      <a href="#">
        <div className="card card--horizontal card-6">
          <div className="card__image col-sm-7 col-md-8">
            <div className="background-image-holder" 
              style={{ background:`url(${props.image})`, opacity:1 }}>
              <img alt="Pic" src={props.image}/>
            </div>
          </div>
          <div className="card__body col-sm-5 col-md-4 boxed boxed--lg bg--white">
            <h6>{props.type}</h6>
            <div className="card__title">
              <h4>{props.title}</h4>
            </div>
            <p>
              {props.note}
            </p>
            <hr/>
            <div className="card__lower">
              <span>by</span>
              <span className="h6">{props.by}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

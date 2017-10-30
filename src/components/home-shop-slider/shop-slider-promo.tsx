import * as React from 'react';

interface Props {}

export default (prop:Props) => {
  return (
    <div className="modal-container modal-active" data-modal-id="sale" data-autoshow="2000">
      <div className="modal-content bg-white imagebg" 
        data-width="50%" data-height="50%" data-overlay="5" 
        style={{ width:'50%', height:'50%' }}>
        <div className="background-image-holder" 
          style={{ background:'url(/img/hero20.jpg)',opacity: 1 }}>
          <img alt="image" src="img/hero20.jpg"/>
        </div>
        <div className="pos-vertical-center clearfix">
          <div className="col-sm-6 col-sm-offset-1">
            <h2>Shop Selected Summer Savings</h2>
            <p>
                Up to 60% off our remaining summer collection. Limited stock only - get in quick.
            </p>
            <a className="btn" href="#">
              <span className="btn__text">Start Shopping</span>
            </a>
          </div>
        </div>
        <div className="modal-close modal-close-cross"/>
      </div>
    </div>
  );
};

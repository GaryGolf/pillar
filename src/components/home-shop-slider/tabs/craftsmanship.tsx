import * as React from 'react';

interface Props {}

export default (props:Props) => {
  const text = 'Robust design, sustainable production and honest pricing are the cornerstones ' +
    'of the Pillar vision — Ours values of craftsmanship and authenticity pervade every piece.';
  return (
    <div className="tab__content">
      <div className="row pos-vertical-align-columns">
        <div className="col-md-6">
          <h6>A Commitment To Quality</h6>
          <p className="lead">{text}</p>
        </div>
        <div className="col-md-4 col-md-push-1 hidden-sm">
          <img alt="pic" src="/img/shop-aux-1.jpg"/>
        </div>
      </div>
    </div>
  );
}; 
